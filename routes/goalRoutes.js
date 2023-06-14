const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')


// [GET] Retrieve goals
router.get('/', getGoals)

// [POST] Create a goal
router.post('/', setGoal)

// [PUT] Update a goal
router.put('/:id', updateGoal)

// [DELETE] Delete a goal
router.delete('/:id', deleteGoal)

module.exports = router