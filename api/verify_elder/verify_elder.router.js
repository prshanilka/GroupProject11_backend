const router = require("express").Router();

const {
    createverifyElder,
    getverifyElderByElderID,
    getverifyElder,
    updateverifyElder,
    deleteverifyElder
} = require("./verify_elder.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/",checkToken,createverifyElder);
router.get("/:elder_id",checkToken,getverifyElderByElderID);
router.get("/",checkToken,getverifyElder);
router.patch("/",checkToken,updateverifyElder);
router.delete("/",checkToken,deleteverifyElder);

module.exports = router;