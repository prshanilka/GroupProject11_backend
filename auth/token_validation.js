const { verify } = require("jsonwebtoken");
const  getIP = require('ipware')().get_ip
const { tokenRefresh }    = require("../api/token/token.controller")

require("dotenv").config(); 
module.exports = {
  checkToken : (req, res, next) =>{
    let token = req.get("authorization");
    if(token){
      token = token.slice(7);
      verify(token, process.env.JSONSALTA+getIP(req).clientIp , (err, decoded) =>{
        if(err){

          res.status(401).json({
            success:0,
            message:"Invalid Token",
            trefresh:1
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
          message:"Access denied unathorized user",
          trefresh:1
      });
    }
  },
  checkRToken : (req, res, next) =>{
    let token = req.get("authorization");
    if(token){
      token = token.slice(7);
      verify(token, process.env.JSONRSALTA+getIP(req).clientIp , (err, decoded) =>{
        if(err){

          res.status(401).json({
            success:0,
            logout:1,
            message:"Invalid Refresh Token"
          });
        }
        else{
 
          tokenRefresh({ user_id: decoded.uid , token: token}, (err,results) =>{

            if(err){
              res.status(401).json({
                success:0,
                logout:1,
                message:"Expired Refresh Token"
              });
            }
            req.auth=decoded;
            req.token=token;
            next();

          })





        }
      })
    }
    else{
      res.status(401).json({
        success:0,
        logout:1,
        message:"Invalid Refresh Token"
      });
    }
  }
}