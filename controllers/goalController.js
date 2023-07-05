/**
 * TO GOD BE ALL THE GLORY
 * This is the controller for handling GOAL ops
 */
const asyncHandler = require('express-async-handler')
// Bring in the Goal model
const Goal = require('../models/goalModel')


/**
 * @desc    Retrieve all the goals saved in the database.
 * @route   GET /api_v1.0/goals
 * @access  Private
 */
const getGoals = asyncHandler(async (req, res) => {
    // Use 'await' to pause the execution to allow for goals to be fetched
    const allGoals = await Goal.find()
    res.status(200).json(allGoals)
})

/**
 * @desc    Insert a new goal into the database
 * @route   POST /api_v1.0/goals
 * @access  Private
 */
const setGoal = asyncHandler(async (req, res) => {
    // Check whether there is any text that has been passed in
    if (!req.body.text) {
        // Means NO text found, issue a 400 bad request error
        res.status(400)
        // Use the inbuilt error handler to throw an error
        throw new Error('Please add a text field')
    }
    // Insert the goal into the database
    const goal = await Goal.create({
        text: req.body.text,
    })
    // Return a 200 OK HTTP status after successful insertion
    res.status(200).json(goal)
})

/**
 * @desc    Update a goal whose ID has been specified
 * @route   PUT /api_v1.0/goals/:id
 * @access  Private
 */
const updateGoal = asyncHandler(async (req, res) => {
    // Search the database for a Goal with the ID that has been passed in
    const goal = await Goal.findById(req.params.id)
    // Check whether there is a record that was found in the database
    if (!goal) {
        // Means no goal with the ID supplied has been found in the database
        res.status(400)
        // Thrown an error
        throw new Error('Goal not found')
    }
    // Means a goal with the ID specified has been found, proceed to update the goal with the updates received
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    // Return a 200 OK response and a JSON response of the updated goal
    res.status(200).json(updatedGoal)

})

/**
 * @desc    Delete the goal whose ID has been specified
 * @route   DELETE /api_v1.0/goals/:id
 * @access  Private
 */
const deleteGoal = asyncHandler(async (req, res) => {
    // Search the database for a Goal with the ID that has been passed in
    const goal = await Goal.findById(req.params.id)
    // Check whether there is a record that was found in the database
    if (!goal) {
        // Means no goal with the ID supplied has been found in the database
        res.status(400)
        // Thrown an error
        throw new Error('Goal not found')
    }
    // Means a goal with the ID specified has been found, proceed to delete the goal
    await goal.remove()
    // Return a 200 OK response and a JSON response containing the ID of the deleted goal
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}