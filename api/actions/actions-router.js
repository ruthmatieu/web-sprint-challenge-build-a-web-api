// Write your "actions" router here!
const express = require('express');
const actions = require('./actions-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Sprint Actions'
    })
});

router.get('/api/actions' (req, res, next) => {

});

router.get('/api/actions/:id' (req, res, next) => {

});

router.post('/api/actions' (req, res, next) => {

});

router.put('/api/actions/:id' (req, res, next) => {

});

router.delete('/api/actions/:id' (req, res, next) => {

});