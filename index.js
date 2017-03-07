console.log("Hello")

const express = require('express');
const bodyParser = require('body-parser');

const port = 3000; // <--- const stands for var, assigning a name to the server

const messages = [ // <--- const stands for var, assigning messages to an array
  {
    id: 1,
    message: "Hello, hello!"
  },
  {
    id: 2,
    message: "I'm Batman!"
  },
  {
    id: 3,
    message: "I love tacos!"
  },

];


const app = express();

app.use(express.static('assets'));

app.use(bodyParser.json());

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({message: req.body.message, time: new Date() });
  res.status(201).json({ messages: messages });
});
//
// app.delete('/', function (req, res) {
//   .pop();
//
//   res.status(200).json();
// });

app.listen(port, function () {
  console.log(`listening on the port: ${port}`);
});
