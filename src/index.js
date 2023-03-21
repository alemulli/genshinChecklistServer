const express = require('express');
const cors = require('cors');
const { PORT = 8080 } = process.env; 
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})

// Body Logger
app.use((req, res, next) => {
    console.log("<     Body Logger Start     >")
    console.log(req.body)
    console.log("<     Body Logger End     >")

    next();
})


// URL/ // http://localhost:8080/
app.get('/', (req,res) => {
    res.json({
        message: "You have connected to the API Server"
    })
})


// Route to URL/api // http://localhost:8080/api
const api = require('./api');
app.use('/api', api)

