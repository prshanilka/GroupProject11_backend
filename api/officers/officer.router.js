
const router = require("express").Router(); 
const { getOfficerByOfficerID } = require("./officer.controller");
const { checkToken } = require("../../auth/token_validation");


router.get("/:elder_id",checkToken,getOfficerByOfficerID);




module.exports = router;