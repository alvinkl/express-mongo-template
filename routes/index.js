const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbAddr = '';
mongoose.connect(dbAddr);

router.get('/', (req, res, next) => {
  res.render('index');
})

module.exports = router;
