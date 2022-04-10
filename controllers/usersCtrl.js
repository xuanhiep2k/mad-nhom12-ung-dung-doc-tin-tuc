const bcrypt = require('bcryptjs');
const connectDB = require('../config/dbMysql')

const usersCtrl = {
    //register
    register: async(req, res) => {
        try {
            const { name, email, password, role } = req.body;
            console.log(req.body)
            if(!email || !password){
                res.status(400).json({
                    message: `Missing ${!email ? 'email' : 'password'}!`
                })
            }

            const hashPassword = await bcrypt.hash(password, 10);;
            await connectDB.query(`INSERT INTO users (name, email, password, role) VALUES ('${name}', '${email}', '${hashPassword}', '${role}')`, () => {
                res.status(200).json({
                    message: 'You registered sucessfully'
                })
            })
        } catch (error) {
            res.status(400).json({error});
        }
    },
    //login
    login: async(req, res) => {
        try {
            const { email, password} = req.body;
            if(!email || !password){
                res.status(400).json({
                    message: `Missing ${!email ? 'email' : 'password'}!`
                })
            }
            
            await connectDB.query(`SELECT * FROM users WHERE email = '${email}'`, (error, data) => {
                if(error) {
                    res.status(400).json({message: "Not found email!"});
                }
                const user = JSON.parse(JSON.stringify(data))[0];
                const isValidate = bcrypt.compareSync(password, user.password);
                if(isValidate){
                    res.status(200).json({message: "Login successfully!"});
                }else{
                    res.status(400).json({message: "Login fail!"});
                }
            })
        } catch (error) {
            res.status(400).json({error});
        }
    }
}

module.exports = usersCtrl;