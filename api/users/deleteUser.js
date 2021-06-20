const User = require('../../models/User');

const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        await User.deleteOne({ _id: id })

        return res.json({ data: "User is deleted" });
    }
    catch( error ){
        return res.json({ data: error });
    }
}

module.exports = deleteUser;