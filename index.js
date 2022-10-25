const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')
const courses1 = require('./data/courses1.json')
const courses2 = require('./data/courses2.json')
const courses3 = require('./data/courses3.json')
const courses4 = require('./data/courses4.json')
const courses5 = require('./data/courses5.json')
const courses6 = require('./data/courses6.json')

app.use(cors());
app.get('/',(req, res) => {
    res.send("Coders API running!!")
})


app.get('/coders-courses',(req, res) => {
    res.send(courses)
})

app.get('/coders-courses/01',(req, res) => {
    res.send(courses1)
})

app.get('/coders-courses/02',(req, res) => {
    res.send(courses2)
})

app.get('/coders-courses/03',(req, res) => {
    res.send(courses3)
})

app.get('/coders-courses/04',(req, res) => {
    res.send(courses4)
})

app.get('/coders-courses/05',(req, res) => {
    res.send(courses5)
})

app.get('/coders-courses/06',(req, res) => {
    res.send(courses6)
})

app.listen(port, () => {
    console.log("Coders server running on port",port)
})