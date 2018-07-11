var express = require('express');
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var pgp = require('pg-promise')(options);
var connectionString = 'postgres://vsa_app:copperroof21@sl73vsahdp0537:5432/VSA_GIS';
var db = pgp(connectionString);

router.get('/api/BotNet', function(req,res, next){
  db.any('select ROW_NUMBER() OVER() AS id,* from gisvsa.bc_beaconing_dashboard_05 limit 1000')
    .then(function (data) {
      res.status(200)
        .json(
          data
        );
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/api/Arbor', function(req,res, next){
  db.any(
            'select  \
          file_date::text, \
          dayofweek, \
          case when max(cast(anomaly_status_53 as INT)) > 0 then 1 else 0 end anomaly_status_53,\
          case when max(cast(anomaly_status_443 as INT)) > 0 then 1 else 0 end anomaly_status_443,  \
          sum(score_53) as score_53,  \
          sum(score_443) as score_443,  \
          sum(count_53) as count_53,  \
          sum(count_443) as count_443 \
        from \
        (select	file_date, \
          dayofweek,  \
          case when dst_port=53 then score end score_53,  \
          case when dst_port=443 then score end score_443,  \
          case when dst_port=53 then count end count_53,  \
          case when dst_port=443 then count end count_443, \
          case when dst_port=53 then anomaly_status end anomaly_status_53,  \
          case when dst_port=443 then anomaly_status end anomaly_status_443 \
        from ( \
        select  distinct file_date::text, port_number as dst_port, anomaly_status, score, count, dayofweek \
        from dtscse.arbor_prediction_anomaly a, dtscse.firewall_allowed_ddos f \
        where a.file_date = f.date and a.port_number = f.dst_port \
        order by file_date asc, dst_port \
          ) sq ) sq1 \
        group by file_date, dayofweek \
        order by file_date asc'
  )
    .then(function (data) {
      res.status(200)
        .json(
          data
        );
    })
    .catch(function (err) {
      return next(err);
    });
});


module.exports = router;
