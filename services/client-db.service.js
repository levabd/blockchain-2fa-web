var Client = require('../models/client.model');

exports.getClients = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        var clients = await Client.paginate(query, options);
        // Return the clients list that was retured by the mongoose promise
        return clients;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Clients');
    }
}

exports.createClient = async function (client) {
    // Creating a new Mongoose Object by using the new keyword
    var newClient = new Client({
        PhoneNumber: client.PhoneNumber,
        Uin: client.Uin,
        Name: client.Name,
        IsVerified: client.IsVerified,
        Email: client.Email,
        Sex: client.Sex,
        BirthDate: client.BirthDate,
        Logs: client.Logs,
        Address: client.Address
    })

    try {
        // Saving the Client 
        var savedClient = await newClient.save();
        return savedClient;
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Creating Client");
    }
}

exports.updateClient = async function (client) {
    var id = client.id;
    try {
        //Find the old Client Object by the Id
        var oldClient = await Client.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the Client");
    }
    // If no old Client Object exists return false
    if (!oldClient) {
        return false;
    }

    //Edit the Client Object
    oldClient.PhoneNumber = client.PhoneNumber;
    oldClient.Uin = client.Uin;
    oldClient.Name = client.Name;
    oldClient.IsVerified = client.IsVerified;
    oldClient.Email = client.Email;
    oldClient.Sex = client.Sex;
    oldClient.BirthDate = client.BirthDate;
    oldClient.Logs = client.Logs;
    oldClient.Address = client.Address;

    console.log(oldClient);

    try {
        var savedClient = await oldClient.save();
        return savedClient;
    } catch (e) {
        throw Error("And Error occured while updating the Client");
    }
}

exports.deleteClient = async function (id) {
    // Delete the Client
    try {
        var deleted = await Client.remove({
            _id: id
        });
        if (deleted.result.n === 0) {
            throw Error("Client Could not be deleted");
        }
        return deleted
    } catch (e) {
        throw Error("Error Occured while Deleting the Client");
    }
}