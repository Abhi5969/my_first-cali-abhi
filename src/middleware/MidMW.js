const jwt = require("jsonwebtoken");

const MidMW= async function(req,res,next){
    let token=req.headers['x-auth-token']
    if(!token) return res.send({status:false,msg:"token is missing"})
    let decode= await jwt.verify(token,'secret-key')
    let UserinPath=req.params.userId
    let loginUser=decode.userid
    if(UserinPath==loginUser) {
        next()
    }else{
        res.send({status:false,msg:"user logged in is not allow to modifi anything"})
    }
         
     
}
module.exports.MidMW=MidMW