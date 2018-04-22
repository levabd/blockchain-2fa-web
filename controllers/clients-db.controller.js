// Accessing the Service that we just created

var ClientService = require('../services/client-db.service');
const crypto = require('crypto');
const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();

exports.getClients = async function (req, res, next) {

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    var serviceName = req.query.service ? req.query.service : 'tfa';
    var serviceNameHash = _hash(serviceName).substring(0, 6);
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 999999999;
    var query = {
        "Address": {
            "$regex": serviceNameHash,
            "$options": "i"
        }
    }
    try {

        var clients = await ClientService.getClients(query, page, limit)

        // Return the clients list with the appropriate HTTP Status Code and Message.

        return res.status(200).json({
            status: 200,
            data: clients,
            message: "Succesfully Clients Recieved"
        });

    } catch (e) {

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({
            status: 400,
            message: e.message
        });

    }
}

exports.dropCollectionClients = async function (req, res, next) {

    const mongoose = require('mongoose');

    try {
        // Drop the 'foo' collection from the current database
        var dropClients = await mongoose.connection.db.dropCollection('clients');
        console.log('Succesfully Clients Collection Dropped');
        return res.json({
            status: 200,
            message: "Succesfully Clients Collection Dropped"
        })
    } catch (e) {
        return res.json({
            status: 400,
            message: e.message
        })
    }
}