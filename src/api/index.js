const express = require('express');

const router = express.Router();

// Routes to all API Components

const users = require('./users')

router.get('/', (req, res) => {
    res.json({
        message: "API"
    })
})

// ROUTER: 404 Error

router.get("/unknown", async (req, res, next) => {
    res.status(404);
    res.send({
      message: "error",
    });
  });
  
  router.use((error, req, res, next) => {
    res.send({ name: error.name, message: error.message, error: error.error });
  });

// Router: URL/api/users

router.use('/users', users);

module.exports = router;