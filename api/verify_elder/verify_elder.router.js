const router = require("express").Router();

const {
  createverifyElder,
  getverifyElderByElderID,
  getverifyElder,
  updateverifyElder,
  deleteverifyElder,
  updateVerifyElderAfterGramAccept,
  updateVerifyElderAfterGramDisQualified,
  updateVerifyElderAfterDiv_Off_Accept,
  updateVerifyElderAfterDiv_Off_DisQualified

} = require("./verify_elder.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createverifyElder);
router.get("/:elder_id", checkToken, getverifyElderByElderID);

router.get("/", checkToken, getverifyElder);
router.patch("/gramaaccept", checkToken, updateVerifyElderAfterGramAccept);
router.patch(
  "/gramadisqualify",
  checkToken,
  updateVerifyElderAfterGramDisQualified
);

router.patch("/", checkToken, updateverifyElder);
router.delete("/", checkToken, deleteverifyElder);
router.patch("/divoffaccept",checkToken,updateVerifyElderAfterDiv_Off_Accept);
router.patch("/divofffdisqulify",checkToken,updateVerifyElderAfterDiv_Off_DisQualified);

module.exports = router;
