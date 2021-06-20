const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const mongoose = require('mongoose');
const API = require('./api');

app.use(express.json( {extended:false} ));
app.use(express.urlencoded({extended: false}));
app.use('/api', API);

mongoose.connect(
    'mongodb://localhost:27017/crud_db', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
)
.then(()=>{console.log('database is connected');})
.catch( error => console.log(error))

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



