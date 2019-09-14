const express = require('express');
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { countCharacters } = require('./lib/strings');


const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/count/:string', (req, res) => {
  res.json({ result: countCharacters(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  res.json({ result: firstCharacters(string, length) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});


module.exports = app;
