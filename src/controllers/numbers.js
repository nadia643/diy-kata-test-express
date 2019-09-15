const numbers = require('../lib/numbers');

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

exports.add = (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: numbers.add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.subtract = (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: numbers.subtract(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.multiply = (req, res) => {
  if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.status(200).json({ result: numbers.multiply(a, b) });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
};

exports.divide = (req, res) => {
  if ((!req.body.a) || !(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.status(200).json({ result: numbers.divide(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
};

exports.remainder = (req, res) => {
  if ((req.body.a === 0) || (req.body.b === 0)) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!req.body.a) || !(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNumeric(req.body.a) && isNumeric(req.body.b)); {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ result: numbers.remainder(a, b) });
  }
};
