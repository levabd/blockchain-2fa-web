var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/client.js');
var getAllUsers = require('../controllers/clients.controller.js').getAllUsers;
var generateOptions = require('../controllers/clients.controller.js').generateOptions;
var getState = require('../controllers/clients.controller.js').getState;

/* GET all clients */
router.get('/', function (req, res, next) {
  // Client.find(function (err, clients) {
  //   if (err) return next(err);
  //   res.json(clients);
  // });
  getAllUsers.then((data) => {
    // data.user.Birthdate = timeConverter(data.user.Birthdate);
    console.log(data);
    res.json(data);
  });
});

function timeConverter(UNIX_timestamp){
  var date = new Date(UNIX_timestamp*1000);
var iso = date.toISOString();
return iso;
}


/* GET single client BY ID */
router.get('/:address', function (req, res, next) {

  let optionsOne = generateOptions('http://127.0.0.1:8008/state/' + req.params.address, {
    'Content-Type': 'application/octet-stream'
  });
  let getOneUserData = getState(optionsOne, 'one')
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
    getOneUserData.then((data) => {
            
      // data.Birthdate = timeConverter(data.Birthdate);
      console.log(data);
      res.json(data);
    });
  // Client.findById(req.params.id, function (err, post) {
  //   if (err) return next(err);
  //   res.json(post);
  // });

});

// /* SAVE client */
// router.post('/', function (req, res, next) {
//   Client.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* UPDATE client */
// router.put('/:id', function (req, res, next) {
//   Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE client */
// router.delete('/:id', function (req, res, next) {
//   Client.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;