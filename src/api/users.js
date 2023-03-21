const express = require('express')

const router = express.Router();

// GET /api/users/
router.get('/', (req, res) => {
    res.json({
        users
    })
})


// Dummy Data
const users = [
    {id: "1", name: "lex", todo: {task1: false, task2: false}}
]

module.exports = router;