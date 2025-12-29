const {Addict} = require('../models/Users.models')
const {Test} = require('../models/Test.models')
const requesttest = async(req, res) => {
    try {
        const {phone} = req.body;
        const user = await Addict.findOne({phone})
        if(!user || !phone)
            return res.status(404).json({status: false, message: "User not found"})

        const test = new Test({alcoholic_id: user._id});
        await test.save()

        return res.status(200).json({status: true, test});
    } catch (err) {
        console.log(err);
        return res.status(500).json({status: false, message: "Internal server error"})
    }
}

module.exports = {
    requesttest
}