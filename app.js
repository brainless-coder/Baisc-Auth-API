const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 


// Database Connection
const url = "mongodb://localhost:27017/authapiDB";
mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true}, function(err) {
    if (err) throw err;
});


var apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});