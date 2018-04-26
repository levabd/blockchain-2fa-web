# docker build . -t sawtooth-tfa-cabinet
FROM node:carbon

ENV API_URL_ENV http://localhost:8080/

# App port
ENV PORT 8080

# Validator config
ENV VALIDATOR_REST_API_WS allatrack-tfa.tk:81/sawtooth-ws
ENV VALIDATOR_REST_API_HTTP http://allatrack-tfa.tk:81/sawtooth
ENV VALIDATOR_REST_API_HOST allatrack-tfa.tk:81
ENV VALIDATOR_REST_API_PORT 8008
ENV VALIDATOR_REST_API_USER sammy
ENV VALIDATOR_REST_API_PASS 11111111

# Database 
ENV DATABASE mongodb://127.0.0.1:27017/twofa

# Auth password secret
ENV AUTH_ADMIN_SECRET yoursecret

# Proxy mode off
ENV USE_PROXY_SERVER false

# Init Root Administrator
ENV INIT_ROOT_ADMIN true
ENV ROOT_ADMIN_NAME Root Administrator
ENV ROOT_ADMIN_USERNAME root
ENV ROOT_ADMIN_EMAIL root@tfa.kz
ENV ROOT_ADMIN_PASS p@$$w0rd

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Cabinet backend api url | Use in frontend (public/main.bundle.js (18356,12))

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
# RUN echo ${PWD}

# RUN cd ./client
# RUN npm install
# RUN npm install -g @angular/cli
# RUN ng build --prod --env=prod
# RUN cd ..

CMD [ "node", "app.js" ]
