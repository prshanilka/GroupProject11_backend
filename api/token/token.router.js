const router = require("express").Router(); 
const { getElderByElderID } = require("./elder.controller");
const { checkToken } = require("../../auth/token_validation");


router.get("/:elder_id",checkToken,getElderByElderID);




module.exports = router;