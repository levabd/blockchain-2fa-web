var express = require('express')
var router = express.Router()
const passport = require('passport');

// Getting the Client Controller and State Controller
var ClientController = require('../../controllers/clients-tf.controller');
var StateController = require('../../controllers/state.controller');

// Map each API to the Controller Functions

// if need to load clients from state
// router.get('/all/:service', passport.authenticate('jwt', { session: false }), ClientController.getAllClients);

router.get('/:address', passport.authenticate('jwt', { session: false}), ClientController.getClient);

router.get('/check/:service/:phoneNumber', passport.authenticate('jwt', { session: false }), ClientController.checkClientNumber);

router.post('/', passport.authenticate('jwt', { session: false }), ClientController.createClient);

router.post('/update/', passport.authenticate('jwt', { session: false }), ClientController.updateClient);

router.get('/state/update', passport.authenticate('jwt', { session: false}), StateController.updateUsersData);

router.get('/state/log/', passport.authenticate('jwt', { session: false }), StateController.getLog);

// Export the Router

module.exports = router;