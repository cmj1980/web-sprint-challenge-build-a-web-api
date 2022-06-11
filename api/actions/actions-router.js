// Write your "actions" router here!
const Actions = require('./actions-model');
const express = require('express');
const router = express.Router();
const { 
    validateActionId,
    validateAction,
 } = require('./actions-middlware')


router.get('/', (req, res, next) => {
   Actions.get()
   .then(actions => {
      res.status(200).json(actions)
   })
   .catch(next);
});

router.get('/:id', validateActionId, async (req, res, next) => {
   try {
       res.status(200).json()
   } catch (err) {
       next(err)
   }
});

module.exports = router