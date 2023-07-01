const mongoose = require('mongoose')

// Create the goal schema
const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value.'],
        },
    },
    {
        timestamps: true,
    }
)

/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = mongoose.model('Goal', goalSchema)