# Free-LLM Router installer for Windows — https://free-llm.com/router
#   irm https://free-llm.com/install.ps1 | iex
# Installs into %USERPROFILE%\.free-llm\app and adds `free-llm` to your user PATH. No admin rights.
$ErrorActionPreference = 'Stop'
$url = if ($env:FREE_LLM_TARBALL) { $env:FREE_LLM_TARBALL } else { 'https://free-llm.com/downloads/free-llm-latest.tgz' }
$home_ = if ($env:FREE_LLM_HOME) { $env:FREE_LLM_HOME } else { Join-Path $env:USERPROFILE '.free-llm' }
$app = Join-Path $home_ 'app'
$bin = Join-Path $home_ 'bin'

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
  Write-Host 'Free-LLM Router needs Node.js 18 or newer. Install it with:  winget install OpenJS.NodeJS.LTS   (or https://nodejs.org)' -ForegroundColor Yellow
  Write-Host 'Then open a new PowerShell window and run this installer again.'
  return
}
$major = [int](& node -p 'process.versions.node.split(".")[0]')
if ($major -lt 18) { Write-Host "Your Node.js is too old ($(& node -v)); version 18+ is needed: https://nodejs.org" -ForegroundColor Yellow; return }

Write-Host 'Installing Free-LLM Router...' -ForegroundColor Cyan
$tmp = Join-Path ([System.IO.Path]::GetTempPath()) ('free-llm-' + [guid]::NewGuid())
New-Item -ItemType Directory -Path $tmp | Out-Null
Invoke-WebRequest -Uri $url -OutFile (Join-Path $tmp 'r.tgz') -UseBasicParsing
tar -xzf (Join-Path $tmp 'r.tgz') -C $tmp
if (Test-Path $app) { Remove-Item -Recurse -Force $app }
New-Item -ItemType Directory -Force -Path $home_, $bin | Out-Null
Move-Item (Join-Path $tmp 'package') $app
Remove-Item -Recurse -Force $tmp
Set-Content -Path (Join-Path $bin 'free-llm.cmd') -Value "@echo off`r`nnode `"$app\router\bin\free-llm.js`" %*" -Encoding ASCII

$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
if (-not ($userPath -split ';' | Where-Object { $_ -eq $bin })) {
  [Environment]::SetEnvironmentVariable('Path', ($userPath.TrimEnd(';') + ';' + $bin), 'User')
}
$env:Path = $env:Path + ';' + $bin
Write-Host "Installed: $bin\free-llm.cmd" -ForegroundColor Green
Write-Host 'Starting the guided setup...'
& (Join-Path $bin 'free-llm.cmd')
