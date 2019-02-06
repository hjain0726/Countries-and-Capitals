var express = require('express');
var router = express.Router();
const crudOperations = require('../db/crud-operations');

router.post('/create', (req, res) => {
  var obj = req.body;
  crudOperations.saveData(obj, res);
});

router.get('/givedata', (req, res) => {
  crudOperations.getData(res);
});

router.put('/editdata/:id', (req, res) => {
  var obj = req.body;
  var id = req.params.id;
  crudOperations.editData(id, obj, res)
});

router.delete('/deletedata/:id', (req, res) => {
  var id = req.params.id;
  crudOperations.deleteData(id, res);
})

module.exports = router;
