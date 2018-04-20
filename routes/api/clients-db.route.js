var express = require('express')

var router = express.Router()

// Getting the Client Controller that we just created

var ClientController = require('../../controllers/clients-db.controller');


// Map each API to the Controller Functions

router.get('/', ClientController.getClients);

router.get('/drop', ClientController.dropCollectionClients);


// Export the Router

module.exports = router;

