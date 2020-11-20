
const router = require("express").Router(); 
const { 
    createOfficers,
    getOfficerByOfficerID,
    getOfficers,
    updateOfficers,
    deleteOfficers
} = require("./divisional_officer.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/",checkToken,createOfficers);
router.get("/:elder_id",checkToken,getOfficerByOfficerID);
router.get("/",checkToken,getOfficers);
router.patch("/",checkToken,updateOfficers);
router.delete("/",checkToken,deleteOfficers);




module.exports = router;