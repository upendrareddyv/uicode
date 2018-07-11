/**
 * Created by kjhaveri on 6/8/2017.
 */
var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
});

var db = require("../../queries");
router.get('/records', db.getAllPuppies);
router.get('/results', db.getSinglePuppy);
router.get('/res', db.getResults);
router.get('/arbor', db.getArbor);
module.exports = router;
