const router = require("express").Router(); 
const { checkToken} = require("../../auth/token_validation");
const {
  propic
} = require("./upload.controller");





router.post("/profile",checkToken,propic);






module.exports = router;