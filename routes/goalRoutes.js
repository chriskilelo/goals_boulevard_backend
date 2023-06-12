const express = require('express')
const router = express.Router()

// [GET] Retrieve goals
router.get('/', (req, res) => {
    res.status(200).json({message:'Get all goals'})
})

// [POST] Create a goal
router.post('/', (req, res) => {
    res.status(200).json({message:'Create a goal'})
})

// [PUT] Update a goal
router.put('/:id', (req, res) => {
    res.status(200).json({message:'Update a goal with ID: ' + req.params.id})
})

// [DELETE] Delete a goal
router.delete('/:id', (req, res) => {
    res.status(200).json({message:'Delete a goal with ID: ' + req.params.id})
})

module.exports = router