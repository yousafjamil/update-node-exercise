const indexController = require('../controller/indexController');
const { isvalidAddress } = require('./validation/paramsvalidation');

const router = require('express').Router();

router.get('/want/title/:address?',isvalidAddress, async (req, res) => {
    indexController.addressView(req,res)
    let myAddress = req.query.address;
    // res.render('index', {
    //      queryAddress : myAddress,
    //     address: req.query.address,
    //     secondAddress: req.query.address
    // })
})
module.exports = router;