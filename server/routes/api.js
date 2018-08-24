var express = require('express'),
    router = express.Router(),
    queryParams = require('../common/queryParams'),
    mongojs = require("mongojs"),
    config = require('config.json'),
    db = mongojs(config.connectionString);

var authenticate = require('../../middlewares/validateRequest');

router.get('/', (req, res) => {
    res.send('api works')
});
router.get('/users_uploading_excess_data', authenticate, function (req, res, next) {
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
router.get('/get_Userdata_by_Source', authenticate, function (req, res, next) {
    var sourceId = req.query.source;
    db.collection('users_uploading_excess_data').find({source: sourceId}, function (error, data) {
        if (data.length == 0 || error) {
            res.json([]);
        } else {
            db.collection('hr_data').find({UserId: data[ 0 ].userID}, function (error1, data1) {
                if (error1) {
                    res.json([]);
                } else {
                    res.json({status: true, userDetails: data1, sourceData: data});
                }
            });
        }
    });
});

module.exports = router;
