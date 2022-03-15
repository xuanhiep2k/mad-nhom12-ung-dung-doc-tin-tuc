const express = require('express');
const routes = express.Router();
const bcrypt = require('bcryptjs');
const connectDB = require('../config/dbMysql')

//route register
routes.post('/register', async(req, res) => {
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
})


module.exports = routes;
