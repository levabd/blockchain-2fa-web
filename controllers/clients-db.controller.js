// Accessing the Service that we just created

var ClientService = require('../services/client-db.service');
const crypto = require('crypto');
const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();


_this = this;



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
    // var query = {}
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

exports.createClient = async function (req, res, next) {

    // Req.Body contains the form submit values.

    var client = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try {

        // Calling the Service function with the new object from the Request Body

        var createdClient = await ClientService.createClient(client)
        return res.status(201).json({
            status: 201,
            data: createdClient,
            message: "Succesfully Created Client"
        })
    } catch (e) {

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({
            status: 400,
            message: "Client Creation was Unsuccesfull"
        })
    }
}

exports.updateClient = async function (req, res, next) {

    // Id is necessary for the update

    if (!req.body._id) {
        return res.status(400).json({
            status: 400.,
            message: "Id must be present"
        })
    }

    var id = req.body._id;

    console.log(req.body)

    var client = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try {
        var updatedClient = await ClientService.updateClient(client)
        return res.status(200).json({
            status: 200,
            data: updatedClient,
            message: "Succesfully Updated Tod"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.removeClient = async function (req, res, next) {

    var id = req.params.id;

    try {
        var deleted = await ClientService.deleteClient(id)
        return res.status(204).json({
            status: 204,
            message: "Succesfully Client Deleted"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }

}

exports.dropCollectionClients = async function (req, res, next) {

    const mongoose = require('mongoose');

    try {
        // Drop the 'foo' collection from the current database
        var dropClients = await mongoose.connection.db.dropCollection('clients');
        console.log('Succesfully Clients Collection Dropped');
        return res.status(204).json({
            status: 204,
            message: "Succesfully Clients Collection Dropped"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
    // mongoose.connection.db.dropCollection('foo', function(err, result) {...});

    // Drop the current database
    // mongoose.connection.db.dropDatabase(function(err, result) {...});
}