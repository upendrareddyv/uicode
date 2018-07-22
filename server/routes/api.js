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
router.get('/excess_category_based_on_time', function(req, res, next) {
    
    db.collection('excess_category_based_on_time').find({}, function(error, data) {
        if (error) {
            res.json([]);

        } else {
            res.json({ status: 'true', data: data });
        }
    });
});

/*var db = require("../../queries");
router.get('/records', db.getAllPuppies);
router.get('/results', db.getSinglePuppy);
router.get('/res', db.getResults);
router.get('/arbor', db.getArbor);*/
module.exports = router;
