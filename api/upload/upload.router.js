const router = require("express").Router(); 
const { checkToken} = require("../../auth/token_validation");
const {
  propic,
  getpropicname,
  gardianpic
} = require("./upload.controller");





router.post("/profile", checkToken, propic);
router.post("/guardianpic",checkToken,gardianpic);

router.post("/getprofile",checkToken,getpropicname);







module.exports = router;