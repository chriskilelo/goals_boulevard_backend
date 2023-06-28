/**
 * TO GOD BE ALL THE GLORY
 * This is the controller for handling GOAL ops
 */


/**
 * @desc    Retrieve all the goals saved in the database.
 * @route   GET /api_v1.0/goals
 * @access  Private
 */
const getGoals = async (req, res) => {
    res.status(200).json({ message: 'Get all goals' })
}


/**
 * @desc    Insert a new goal into the database
 * @route   POST /api_v1.0/goals
 * @access  Private
 */
const setGoal = async (req, res) => {
    // Check whether there is any text that has been passed in
    if (!req.body.text) {
        // Means NO text found, issue a 400 bad request error
        res.status(400)
        // Use the inbuilt error handler to throw an error
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Create a goal' })
}


/**
 * @desc    Update a goal whose ID has been specified
 * @route   PUT /api_v1.0/goals/:id
 * @access  Private
 */
const updateGoal = async (req, res) => {
    res.status(200).json({ message: 'Update a goal with ID: ' + req.params.id })
}


/**
 * @desc    Delete the goal whose ID has been specified
 * @route   DELETE /api_v1.0/goals/:id
 * @access  Private
 */
const deleteGoal = async (req, res) => {
    res.status(200).json({ message: 'Delete a goal with ID: ' + req.params.id })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}