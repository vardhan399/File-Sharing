const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const path = require('path')
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
const baseURL = process.env.APP_BASE_URL;
const multerroute = require('./routes/multer')
const showroute = require('./routes/show')
const downloadroute = require('./routes/download')
 const authroute = require('./routes/authentication')
 app.use(express.json());
 app.use(cors());
const PORT = process.env.PORT || 3000
app.use('/Home', authroute);
app.use('/api', multerroute);
app.use('/files', showroute);
app.use('/files/download',downloadroute);

app.listen(PORT,()=>{
    console.log(`server is running on this ${PORT}`)
})
