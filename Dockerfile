FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Cabinet backend api url | Use in frontend (public/main.bundle.js (18356,12))
ENV API_URL_ENV http://localhost:8080/

# App port
ENV PORT 8080

# Validator config
ENV VALIDATOR_REST_API_HTTP http://localhost:8008
ENV VALIDATOR_REST_API_HOST localhost:8008
ENV VALIDATOR_REST_API_PORT 8008
ENV VALIDATOR_REST_API_USER sawtooth
ENV VALIDATOR_REST_API_PASS z92aGlTdLVYk6mR

# Database 
ENV DATABASE mongodb://127.0.0.1:27017/twofa

# Auth password secret
ENV AUTH_ADMIN_SECRET yoursecret

# Proxy mode off
ENV USE_PROXY_SERVER false

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

CMD [ "node", "app.js" ]
