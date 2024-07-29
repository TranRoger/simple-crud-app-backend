const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const app = express()
const productRoute = require('./routes/product.route.js')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from API server");
});



mongoose.connect("mongodb+srv://anhth5659:INKTX6ZMa5dsiMwO@nodeapi.jaeeyx6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeAPI")
    .then(() => {
        console.log("Connected to database")
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed")
    })