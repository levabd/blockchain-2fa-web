module.exports.PORT = process.env.PORT || 8080;
module.exports.VALIDATOR_REST_API_HTTP = process.env.VALIDATOR_REST_API_HTTP || `http://localhost:8008`;
module.exports.VALIDATOR_REST_API_HOST = process.env.VALIDATOR_REST_API_HOST || `localhost:8008`;
module.exports.VALIDATOR_REST_API_PORT = process.env.VALIDATOR_REST_API_PORT || `8008`;
module.exports.VALIDATOR_REST_API_USER = process.env.VALIDATOR_REST_API_USER || `sawtooth`;
module.exports.VALIDATOR_REST_API_PASS = process.env.VALIDATOR_REST_API_PASS || `z92aGlTdLVYk6mR`;
module.exports.DATABASE = process.env.DATABASE || `mongodb://127.0.0.1:27017/twofa`;
module.exports.AUTH_ADMIN_SECRET = process.env.AUTH_SECRET || `yoursecret`;
module.exports.USE_PROXY_SERVER = process.env.USE_PROXY_SERVER || false;