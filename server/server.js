const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api'); // Import the API router
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRouter); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});