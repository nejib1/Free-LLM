# Free-LLM Router — https://free-llm.com/router
#   docker build -t free-llm https://github.com/nejib1/Free-LLM.git
#   docker run -d --name free-llm -p 4000:4000 -v free-llm:/data free-llm
#   docker logs free-llm        # shows the router key
FROM node:22-alpine
WORKDIR /app
COPY --chown=node:node package.json LICENSE ./
COPY --chown=node:node router/bin ./router/bin
COPY --chown=node:node router/src ./router/src
COPY --chown=node:node router/public ./router/public
COPY --chown=node:node router/catalog.snapshot.json ./router/
ENV FREE_LLM_HOME=/data FREE_LLM_HOST=0.0.0.0 FREE_LLM_PORT=4000 NODE_ENV=production
RUN mkdir -p /data && chown node:node /data
VOLUME /data
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=5s CMD wget -qO- http://127.0.0.1:4000/health || exit 1
USER node
CMD ["node", "router/bin/free-llm.js", "start"]
