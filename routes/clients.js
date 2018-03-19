var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/client.js');

/* GET all clients */
router.get('/', function (req, res, next) {
  Client.find(function (err, clients) {
    if (err) return next(err);
    res.json(clients);
  });
});

/* GET single client BY ID */
router.get('/:id', function (req, res, next) {
  Client.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE client */
router.post('/', function (req, res, next) {
  Client.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE client */
router.put('/:id', function (req, res, next) {
  Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE client */
router.delete('/:id', function (req, res, next) {
  Client.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;