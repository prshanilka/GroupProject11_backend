const { verify } = require("jsonwebtoken");
require("dotenv").config(); 
module.exports = {
  checkToken : (req, res, next) =>{
    let token = req.get("authorization");
    if(token){
      token = token.slice(7);
      verify(token, process.env.JSONSALTA, (err, decoded) =>{
        if(err){
          res.json({
            success:0,
            message:"Invalid Token"
          });
        }
        else{
          req.auth=decoded;
          next();
        }
      })
    }
    else{
      res.json({
          success:0,
          message:"Access denied unathorized user"
      });
    }
  }
}