const User = require('../../models/User');

const createUser = async(req, res) => {
    try {
        const user = req.body;
        const result = await User.create(user);
        
        if(result) return res.json({ data: result });
        else return res.json({ data: null });
    }
    catch( error ){
        return res.json({ data: error });
    }
}

module.exports = createUser;