/**
 * TO GOD BE ALL THE GLORY
 * 22-JUN-2023 
 */

const errorHandler = (err, req, res, next) => {
    // If the Status Code has not been passed in, default to using the Status Code 500
    const statusCode = res.statusCode ? res.statusCode : 500
    // Set the HTTp status on the response
    res.status(statusCode)
    // Set the response to be returned in JSON fromat
    res.json({
        message : err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}

