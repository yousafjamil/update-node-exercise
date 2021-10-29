
module.exports = {
    isvalidAddress: (req, res, next) => {
        if (req.query.address != undefined && req.query.address != '') {
            if (Array.isArray(req.query.address)) {
                req.address = req.query.address
                next();
            }
            else {
                req.address = [req.query.address];
                next();
            }
        }
        req.address = [];
        next();

    }
};