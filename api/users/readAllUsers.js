const User = require('../../models/User');


const readAllUser = async(req, res) => {
    try {
        const result = await User.find({});
        
        if(result) return res.json({ data: result });
        else return res.json({ data: null });
    }
    catch( error ){
        return res.json({ data: error });
    }
}

module.exports = readAllUser;