'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get user');
});

router.post('/:userId', (req, res) => {
  res.send('post user');
});

router.delete('/:userId', (req, res) => {
  res.send('delete user');
});

router.patch('/:userId', (req, res) => {
  res.send('patch user');
});

module.exports = router;