
const router = require("express").Router(); 
const { 
    createOfficers
} = require("./post_officer.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/",checkToken,createOfficers);





module.exports = router;