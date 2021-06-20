const User = require('../../models/User');

const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        
        const result = await User.updateOne( { _id: id }, update );

        if(result) return res.json({ data: result });
        else return res.json({ data: null });
    }
    catch( error ){
        return res.json({ data: error });
    }
}

module.exports = updateUser;