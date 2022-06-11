// Write your "actions" router here!
const Actions = require('./actions-model')
const express = require('express')
const router = express.Router()
const { 
    validateActionId,
    validateAction,
 } = require('./actions-middlware')


router.get('/', (req, res, next) => {
   Actions.get()
   .then(actions => res.json(actions))
   .catch(next);
});

module.exports = router;