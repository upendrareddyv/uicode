var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://vsa_app:copperroof21@sl73vsahdp0537:5432/VSA_GIS';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  getResults: getResults,
  getArbor: getArbor,
};


function getAllPuppies(req, res, next) {
  db.any('SELECT * FROM siem_alert_log;')
    .then(function (data) {
      res.status(200)
        .json(
          data
        );
    })
    .catch(function (err) {
      return next(err);
    });
}




function getSinglePuppy(req, res, next) {

  db.any('select ROW_NUMBER() OVER() AS id,* from gisvsa.ext_bc_beacon_spark limit 10')
    .then(function (data) {
      res.status(200)
        .json(
          data
        );
    })
    .catch(function (err) {
      return next(err);
    });
}


function getResults(req, res, next) {

  db.any('SELECT distinct * FROM gisvsa.bc_beaconing_dashboard_05 where cs_bytes < 1000  limit 15;')
    .then(function (data) {
      res.status(200)

          data

    })
    .catch(function (err) {
      return next(err);
    });
}

function getArbor(req, res, next) {

  db.any('\
          select  \
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
        order by file_date asc')
    .then(function (data) {
      res.status(200)
        .json(
          data
        );
    })
    .catch(function (err) {
      return next(err);
    });
}
