/**
 * TO GOD BE ALL THE GLORY
 * This is the controller for handling GOAL ops
 */


/**
 * @desc    Retrieve all the goals saved in the database.
 * @route   GET /api_v1.0/goals
 * @access  Private
 */
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get all goals' })
}


/**
 * @desc    Insert a new goal into the database
 * @route   POST /api_v1.0/goals
 * @access  Private
 */
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Create a goal' })
}


/**
 * @desc    Update a goal saved in the database.
 * @route   PUT /api_v1.0/goals/:id
 * @access  Private
 */
const updateGoal = (req, res) => {
    res.status(200).json({ message: 'Update a goal with ID: ' + req.params.id })
}


/**
 * @desc    Retrieve all the goals saved in the database.
 * @route   DELETE /api_v1.0/goals/:id
 * @access  Private
 */
const deleteGoal = (req, res) => {
    res.status(200).json({ message: 'Delete a goal with ID: ' + req.params.id })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}