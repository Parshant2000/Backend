// const express = require('express')
// const mongoose = require('mongoose')

// const app = express()

// app.use(express.json)

// app.get('/', (req, res) => {
//     res.send('updates hello api server');
// });

// app.post('/api/products',(req,res)=>{
//     res.send('products');

// });


//  mongoose.connect("mongodb+srv://parshant:t2oANjtcrYWCzl5y@backenddb.xsd2k.mongodb.net/?retryWrites=true&w=majority")
//     .then(() => {
//          console.log('Connected to database!');
//          app.listen(3000, () => {
//              console.log('server is runnig at 3000 port');

//         });
//      })
//      .catch((error) => {
//          console.log('connection failed');
//      });


import express from 'express';
import bodyParser from 'body-parser';
import db from './db/index.js';
import noteRoutes from './routes/notes.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/api/notes', noteRoutes);
app.get('/health', (req, res) => {
    res.send('success: true');
});
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});