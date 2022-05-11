const users = require('../models/user');

const usersCtrl = {
    //getUser
    getAllUsers: async(req, res) => {
        try {
            const listUsers = await users.find({});
      return res.json([...listUsers]);
        } catch (error) {
            return next(error);
        }
    },
    // register
    register: async(req, res) => {
        try {
            const { username, password, fullname } = req.body;
            const user = await users.create({username, password, fullname});
            res.json("success");
        } catch (error) {
            res.status(400).json({error});
        }
    },

    //login
    login: async(req, res) => {
        try {
            const { username, password } = req.body;
            if(!username || !password){
                res.status(400).json({
                    message: `Missing ${!username ? 'username' : 'password'}!`
                })
            }
            
            const user = await users.findOne({"username": username});
            if(user != null){
                if(user.password == password){
                    res.json(user);
                }
                else{
                    res.json("Not match password")
                }
            }
            else{
                res.json("Not found")
            }
            
        } catch (error) {
            
        }
     }
}

module.exports = usersCtrl;