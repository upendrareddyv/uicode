var express = require('express'),
    router = express.Router(),
    queryParams = require('../common/queryParams'),
    mongojs = require("mongojs"),
    config = require('config.json'),
    db = mongojs(config.connectionString);

router.get('/', (req, res) => {
    res.send('api works')
});
router.get('/users_uploading_excess_data', function (req, res, next) {
    var records = queryParams.getLimit(),
        page = queryParams.getOffset();

    // console.log(records, page);
    var skip = parseInt(records * page);

    var match = {};
    match.bytes_sent = {"$nin": [ "NULL", null, "null" ]};
    var newMatch = {
        $match: match
    };
    db.collection('users_uploading_excess_data').aggregate([ newMatch, {
        $group: {
            _id: "$source",
            llamadas: {$sum: "$bytes_sent"}
        }
    }, {$skip: skip}, {$limit: records}, ], function (error, data) {
        db.collection('users_uploading_excess_data').aggregate([ newMatch, {
            $group: {
                _id: "$source",
                llamadas: {$sum: "$bytes_sent"}
            }
        } ], function (error1, totalRecords) {
            if (error1) {
                res.json([]);

            } else {
                res.json({status: 'true', data: data, _totalRecords: totalRecords.length});
            }
        });
    });
});

module.exports = router;
