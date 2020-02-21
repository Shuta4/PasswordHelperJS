const fs = require('fs');
const express = require('express');
const router = express.Router();
const Password = require('./db/Schemas/Password');

router.get('/passwords/all', (req, res) => {
    // All passwords
    Password.find({}).then(passwords => {
        res.send(passwords)
    });
});
router.get('/passwords/id/:id', (req, res) => {
    // Password by _id
    Password.findById(req.params.id).then(password => res.send(password));
})
router.get('/passwords/title/:title', (req, res)=> {
    // Password by title
    Password.find({title: req.params.title}).then(password => res.send(password));
});

router.get('/passwords/login/:login', (req, res) => {
    // Password by its login
    Password.find({login: req.params.login}).then(password => res.send(password));
});

router.delete('/passwords/delete/:id', (req, res) => {
    // delete password with "_id" == "req.params.id"
    Password.findByIdAndDelete(req.params.id).then(() => res.send("Deleted successfully"));
});

router.post('/passwords/add', (req, res) => {
    // Add password
    Password.create(req.body).then(password => res.send(password));
});

router.put('/passwords/update/:id', (req, res) => {
    // Update password with "id" == "req.params.id"
    Password.findByIdAndUpdate(req.params.id, req.body).then(() => Password.findOne({id: req.params.id}))
        .then(password => res.send(password));
});

module.exports = router;
