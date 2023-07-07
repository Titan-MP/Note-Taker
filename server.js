const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(require('./routes'));

app.listen(PORT, () => console.log(`Server is running on http://localhost/${PORT}`));