var express = require('express')

var router = express.Router()

// Getting the Client Controller that we just created

var ClientController = require('../../controllers/clients-tf.controller');
var StateController = require('../../controllers/state.controller');


// Map each API to the Controller Functions

router.get('/:address', ClientController.getClient);

router.get('/all/:service', ClientController.getAllClients);

router.get('/check/:service/:phoneNumber', ClientController.checkClientNumber);

router.get('/state/update', StateController.updateUsersData);

router.get('/state/log/', StateController.getLog);

router.post('/', ClientController.createClient);

router.post('/update/', ClientController.updateClient);

// Export the Router

module.exports = router;