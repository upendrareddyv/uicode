/**
 * Created by kjhaveri on 6/8/2017.
 */
var express = require('express');
var router = express.Router();
var mongojs = require("mongojs"),
  config = require('config.json'),
  db = mongojs(config.connectionString);


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
});
router.get('/users_uploading_excess_data', function(req, res, next) {
  var records;
  if (req.query.records) {
    records = parseInt(req.query.records);
  } else {
    records = 20;
  }

  var page;
  if (req.query.page) {
    page = parseInt(req.query.page)-1;
  } else {
    page = 1;
  }
  console.log(records,page);
  var skip = parseInt(records * page);

  var match = {};
  match.bytes_sent = { "$nin": ["NULL", null, "null"] };
  var newMatch = {
    $match: match
  };
  db.collection('users_uploading_excess_data').aggregate([newMatch, {
    $group: {
      _id: "$source",
      llamadas: { $sum: "$bytes_sent" }
    }
  }, { $skip: skip },{ $limit: records },], function(error, data) {
  db.collection('users_uploading_excess_data').aggregate([newMatch, {
    $group: {
      _id: "$source",
      llamadas: { $sum: "$bytes_sent" }
    }
  }], function(error1,totalrecordss){
    if (error1) {
      res.json([]);

    } else {
      res.json({ status: 'true', data: data,totalrecordss:totalrecordss.length });
    }
  });
});
});

/*var db = require("../../queries");
router.get('/recordss', db.getAllPuppies);
router.get('/results', db.getSinglePuppy);
router.get('/res', db.getResults);
router.get('/arbor', db.getArbor);*/
module.exports = router;
