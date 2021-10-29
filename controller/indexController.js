
module.exports = {
    addressView: async function (req, res) {
        try {
            console.log(req.address);
            return res.render('../views/index', {
                queryAddress: req.address,
                address: req.query.address,
                secondAddress: req.query.address
            })

        } catch (error) {
            return res.status(422).json(error.message);
        }
    }
}