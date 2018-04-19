const express = require('express');

const router = express.Router();
const clientsdb = require('./api/clients-db.route');
const clients = require('./api/clients-tf.route');


router.use('/clientsdb', clientsdb);
router.use('/clients', clients);

module.exports = router;