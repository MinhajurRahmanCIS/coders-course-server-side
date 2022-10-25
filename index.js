const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req, res) => {
    res.send("Coders API running!!")
})


app.listen(port, () => {
    console.log("Coders server running on port",port)
})