const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;
    res.json({url:URL});
});