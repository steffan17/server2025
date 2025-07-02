const express = require('express');
const dbFn = require('./db');
const router = express.Router();


router.get('/api/getTables', (req, res) => {
    res.send(dbFn.getTables());
});
router.get('/api/getTable/:tableName', (req, res) => {
    console.log(dbFn.getTable(req.params.tableName));
    res.send(dbFn.getTable(req.params.tableName));
});
router.get('/api/addRow/:tableName', (req, res) => {
    res.send(dbFn.addRow(req.params.tableName, req.query.row));
});
router.get('/api/delRow/:tableName', (req, res) => {
    res.send(dbFn.delRow(req.params.tableName, req.query.id));
});
router.get('/api/updateRow/:tableName', (req, res) => {
    res.send(dbFn.updateRow(req.params.tableName, req.query.id, req.query.row));
});
router.post('/api/getSelect', (req, res) => {
    console.log(req.body.select);
    res.send(dbFn.getSelect(req.body.select));
});



router.get('/api', (req, res) => {
    res.send('test api ;-)');
});
router.get('/api/test', (req, res) => {
    res.send(dbFn.testFun());
});
router.get('/api/testPutSomething', (req, res) => {
    dbFn.testPutSomething();
    res.send('OK');
});

module.exports = router;