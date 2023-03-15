const express = require('express');
const api = require('./api');
const { PORT = 3000 } = process.env; 
const app = express();

app.get('/', (req,res) => {
    res.json({
        message: "Service Confirmed"
    })
})

app.use('/api', api)

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})