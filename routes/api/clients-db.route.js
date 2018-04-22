var express = require('express')
var router = express.Router()
const passport = require('passport');

// Getting the Client Controller
var ClientController = require('../../controllers/clients-db.controller');

// Map each API to the Controller Functions

router.get('/', passport.authenticate('jwt', { session: false}), ClientController.getClients);

router.get('/drop', passport.authenticate('jwt', { session: false}), ClientController.dropCollectionClients);

// Export the Router

module.exports = router;

