const router = require("express").Router(); 
const { getElderByElderID, getElders  } = require("./elder.controller");
const { checkToken } = require("../../auth/token_validation");


router.get("/:elder_id",checkToken,getElderByElderID);
router.get("/",checkToken,getElders);




module.exports = router;