// Write your "projects" router here!
const express = require('express');
const actions = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Sprint Projects'
    })
});

router.get('/api/projects' (req, res, next) => {

});

router.get('/api/projects/:id' (req, res, next) => {

});

router.post('/api/projects' (req, res, next) => {

});

router.put('/api/projects/:id' (req, res, next) => {

});

router.delete('/api/projects/:id' (req, res, next) => {

});