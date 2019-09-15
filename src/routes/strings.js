const express = require('express');
const strings = require('../lib/strings');

const router = express.Router();


router.get('/hello/:string', (req, res) => {
  res.json({ result: strings.sayHello(req.params.string) });
});

router.get('/upper/:string', (req, res) => {
  res.json({ result: strings.uppercase(req.params.string) });
});

router.get('/lower/:string', (req, res) => {
  res.json({ result: strings.lowercase(req.params.string) });
});

router.get('/count/:string', (req, res) => {
  res.json({ result: strings.countCharacters(req.params.string) });
});

router.get('/first-character/:string', (req, res) => {
  res.json({ result: strings.firstCharacter(req.params.string) });
});

router.get('/first-characters/:string', (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  res.json({ result: strings.firstCharacters(string, length) });
});

module.exports = router;
