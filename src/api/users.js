const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        users
    })
})

const users = [
    {id: "1", name: "lex", todo: {task1: false, task2: false}}
]

module.exports = router;