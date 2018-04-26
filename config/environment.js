module.exports.PORT = process.env.PORT || 8080;
module.exports.VALIDATOR_REST_API_WS = process.env.VALIDATOR_REST_API_WS || `allatrack-tfa.tk:81/sawtooth-ws`;
module.exports.VALIDATOR_REST_API_HTTP = process.env.VALIDATOR_REST_API_HTTP || `http://allatrack-tfa.tk:81/sawtooth`;
module.exports.VALIDATOR_REST_API_HOST = process.env.VALIDATOR_REST_API_HOST || `allatrack-tfa.tk:81`;
module.exports.VALIDATOR_REST_API_PORT = process.env.VALIDATOR_REST_API_PORT || `8008`;
module.exports.VALIDATOR_REST_API_USER = process.env.VALIDATOR_REST_API_USER || `sammy`;
module.exports.VALIDATOR_REST_API_PASS = process.env.VALIDATOR_REST_API_PASS || `11111111`;
module.exports.DATABASE = process.env.DATABASE || `mongodb://127.0.0.1:27017/twofa`;
module.exports.AUTH_ADMIN_SECRET = process.env.AUTH_SECRET || `yoursecret`;
module.exports.USE_PROXY_SERVER = process.env.USE_PROXY_SERVER || false;

//Root Administrator Config
module.exports.INIT_ROOT_ADMIN = process.env.INIT_ROOT_ADMIN || false;
module.exports.ROOT_ADMIN_NAME = process.env.ROOT_ADMIN_NAME || 'Root Administrator';
module.exports.ROOT_ADMIN_USERNAME = process.env.ROOT_ADMIN_USERNAME || 'root';
module.exports.ROOT_ADMIN_EMAIL = process.env.ROOT_ADMIN_EMAIL || 'root@tfa.kz';
module.exports.ROOT_ADMIN_PASS = process.env.ROOT_ADMIN_PASS || 'p@$$w0rd';