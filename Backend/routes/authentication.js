const { Router } = require('express');
const router = Router();
const { USER } = require('../Db/db');
const myInput = require('../Inputvalidation/index')
const jwt = require('jsonwebtoken');
const key = process.env.KEY;


router.post('/sign-up', myInput, async function(req, res) {
    try {
        const { username, password } = req.body;

        if(!username && password ){
           return  res.status(400).json({
                msg: "username must be required...",
            })
        }
        else if(username && !password){
            return res.status(400).json({
                msg: "Password must be required..."
            })
        }

        const userfind = await USER.findOne({
            username:username,
            password:password
        })

        if(userfind){
            return res.json({
                msg: "user already exists!"
            })
        }
        else{
        await USER.create({
            username: username,
            password: password,
        });
        }

        res.json({
            msg: "User sign-up successful!"
        });
    } catch (error) {
        console.error("Error in sign-up:", error);
        res.status(500).json({ error: "Internal server error!" });
    }
});

router.post('/login', myInput , async function(req, res) {
    try {
        const { username, password } = req.body;

        const user = await USER.findOne({
            username: username,
            password: password,
        });

        if (user) {
            const token = jwt.sign({ username }, key);
          return  res.json({
            token:token,
           })
        } else {
           return  res.status(401).json({ msg2:"Invalid Credentials" });
        }
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
