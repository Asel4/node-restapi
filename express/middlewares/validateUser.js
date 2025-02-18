const validateUser = (req,res,next)=>{
    const{name, email} = req.body;

    if(!name || !email){        //validation step(if name or email is missing)
        return res.status(400).json({error: "name and email required"})
    }

    next();

}

module.exports = validateUser;