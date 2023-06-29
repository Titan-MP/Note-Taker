const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
})

app.listen(PORT, () => console.log(`Server is running on http://localhost/${PORT}`));