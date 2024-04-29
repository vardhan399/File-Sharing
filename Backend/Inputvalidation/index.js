const zod = require('zod');

function InputValidation(req,res,next){

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6).max(12);
const username = emailSchema.safeParse(req.body.username);
const password = passwordSchema.safeParse(req.body.password);

const err = [];

try{
    if(username.success && password.success){
        next();
    }
    else
    return res.status(400).json({msg:"Invalid Input"});

    
}catch(error){
    res.json({
        msg: "Something went wrong!..."
    })
}
}

module.exports = InputValidation;
