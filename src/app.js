const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const isNumeric = (string) => { return !Number.isNaN(parseInt(string)); };

const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/count/:string', (req, res) => {
  res.json({ result: strings.countCharacters(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.json({ result: strings.firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  res.json({ result: strings.firstCharacters(string, length) });
});

app.get('/numbers/add/:a/and/:b/', (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: numbers.add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:b/from/:a/', (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: numbers.subtract(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply/', (req, res) => {
  if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.status(200).json({ result: numbers.multiply(a, b) });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide/', (req, res) => {
  if ((!req.body.a) || !(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.status(200).json({ result: numbers.divide(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

module.exports = app;
