// Write your "projects" router here!
const Projects = require('./projects-model');
const express = require('express');

const router = express.Router();
const { validateProjectId } = require('./projects-middleware');

router.get('/', (req, res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ 
            message: 'The posts information could not be retrieved'
         })
    })
})



module.exports = router