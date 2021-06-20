const User = require('../../models/User');

const readUser = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await User.findOne({ _id: id });
        
        if(result) return res.json({ data: result });
        else return res.json({ data: null });
    }
    catch( error ){
        return res.json({ data: error });
    }
}

module.exports = readUser;