const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(8080, () => {
    console.log(`Server listening at 8080`);
});