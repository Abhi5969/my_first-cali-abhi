const jwt = require("jsonwebtoken");

const MidMW= async function(req,res,next){
    let token=req.headers['x-auth-token']
    if(!token) return res.send({status:false,msg:"token is missing"})
    let decode= await jwt.verify(token,'secret-key')
    if(!decode) return res.send({status:false,msg:"wrong token"})
    next()
}

module.exports.MidMW=MidMW