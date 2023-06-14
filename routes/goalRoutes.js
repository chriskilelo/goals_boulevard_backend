const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

// Chain the GET and SET methods to one route since both of their endpoints are similar i.e. (/)
router.route('/').get(getGoals).post(setGoal)

// Chain the UPDATE and DELETE methods to one route since both of their endpoints are similar i.e. (/:id)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router