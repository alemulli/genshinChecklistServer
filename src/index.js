const express = require('express');

const { PORT = 3000 } = process.env; 
const app = express();

app.get('/', (req,res) => {
    res.json({
        message: "Service Confirmed"
    })
})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})