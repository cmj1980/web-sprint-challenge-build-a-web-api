// Write your "actions" router here!
const express = require('express')
const router = express.Router()
const Actions = require('./actions-model')
const { 
   validateActionId, 
   validateAction 
} = require('./actions-middlware')



router.get('/', (req, res, next) => {
   Actions.get()
   .then(actions => {
      res.status(200).json(actions)
   })
   .catch(next)
})

router.get('/:id', validateActionId, async (req, res, next) => {
   try {
       res.status(200).json(req.action)
   } catch (err) {
       next(err)
   }
});

router.post('/', validateAction, validateActionId, async (req, res, next) => {
   try {
      const newAction = await Actions.insert(req.body)
      res.status(201).json(newAction)
   } catch(err) {
      next(err)
   }
});

router.put('/:id', validateAction, validateActionId, async (req, res, next) => {
    const { completed, description, notes, project_id } = req.body
    try {
       const updateActions = await Actions.update(req.params.id, {
          completed: completed,
          description: description,
          notes: notes,
          project_id: project_id,
          id: req.params.id
       })
       res.status(200).json(updateActions)
    } catch(err) {
       next(err)       
    }
});



module.exports = router;