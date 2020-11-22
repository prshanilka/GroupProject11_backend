const router = require("express").Router(); 
 
const { tokenD } = require("./token.controller");
const { checkToken } = require("../../auth/token_validation");

 

router.delete("/",checkToken,tokenD);



module.exports = router;