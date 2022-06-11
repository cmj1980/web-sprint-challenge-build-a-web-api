// add middlewares here related to actions
const Actions = require('./actions-model')

async function validateActionId(req, res, next){
    try{
        const action = await Actions.get(req.params.id)
        if(!action){
            res.status(404).json({message: 'Error: No actions were found with that ID'})
        } else{
            req.action = action
            next()
        }
    }catch(err){
        res.status(400).json({message: 'Error: action not found'})
    }
}

const validateAction = async (req, res, next) => {
    if (!req.body.notes || !req.body.description || !req.body.project_id) {
      next({
        status: 400,
        message: "missing a required input field",
      });
    } else {
      next();
    }
  };


module.exports = {validateActionId, validateAction}
