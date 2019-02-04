var express = require('express');
var router = express.Router();
const crudOperations = require('../db/crud-operations');

router.post('/create', (req, res) => {
  var obj = req.body;
  crudOperations.saveData(obj, res);
})

module.exports = router;
