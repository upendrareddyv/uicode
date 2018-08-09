var queryParams = require('./queryParams');
function paginationParams (req, res, next) {
    if (req.query.records) {
        queryParams.setLimit(parseInt(req.query.records));
    }
    if (req.query.page) {
        queryParams.setOffset(parseInt(req.query.page) - 1);
    }
    next();
}
module.exports = paginationParams;
