const express = require('express');
const strings = require('../lib/strings');

exports.hello = (req, res) => {
  res.json({ result: strings.sayHello(req.params.string) });
};

exports.upper = (req, res) => {
  res.json({ result: strings.uppercase(req.params.string) });
};

exports.lower = (req, res) => {
  res.json({ result: strings.lowercase(req.params.string) });
};

exports.count = (req, res) => {
  res.json({ result: strings.countCharacters(req.params.string) });
};

exports.firstCharacter = (req, res) => {
  res.json({ result: strings.firstCharacter(req.params.string) });
};

exports.firstCharacters = (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  res.json({ result: strings.firstCharacters(string, length) });
};
