const comments = require('../models/comment');

const commentsCtrl = {
    //getComment
    getAllComment: async(req, res) => {
        try {
            const listComments = await comments.find({});
      return res.json([...listComments]);
        } catch (error) {
            return next(error);
        }
    },
    //register
    // register: async(req, res) => {
    //     try {
    //         const { name, email, password, role } = req.body;
    //         console.log(req.body)
    //         if(!email || !password){
    //             res.status(400).json({
    //                 message: `Missing ${!email ? 'email' : 'password'}!`
    //             })
    //         }

    //         const hashPassword = await bcrypt.hash(password, 10);;
    //         await connectDB.query(`INSERT INTO users (name, email, password, role) VALUES ('${name}', '${email}', '${hashPassword}', '${role}')`, () => {
    //             res.status(200).json({
    //                 message: 'You registered sucessfully'
    //             })
    //         })
    //     } catch (error) {
    //         res.status(400).json({error});
    //     }
    // },
    //login
    // login: async(req, res) => {
    //     try {
    //         const { username, password } = req.body;
    //         if(!username || !password){
    //             res.status(400).json({
    //                 message: `Missing ${!username ? 'username' : 'password'}!`
    //             })
    //         }
            
    //         const user = await users.findOne({"username": username});
    //         if(user != null){
    //             if(user.password == password){
    //                 res.json(user);
    //             }
    //             else{
    //                 res.json("Not match password")
    //             }
    //         }
    //         else{
    //             res.json("Not found")
    //         }
            
    //     } catch (error) {
            
    //     }
    //  }
}

module.exports = commentsCtrl;