const router = require("express").Router();
const {
  getGramaDivisionByGramaDivisionID,
  createGramaDivision,
  getGramaDivisions,
  updateGramaDivision,
  deleteGramaDivision,
  getToBeVerifyList,
  getGramaDivisionsToSelectOfficers,
  getGramaDivisionsToSelectBox,
  getBenifisherListToGram,
  getBenifisherCountToGram,
  getGramaDivisionsIDonly,
  getAgentVerifyList,
} = require("./grama-division.controllers");
const { checkToken } = require("../../auth/token_validation");

router.get("/gramandionly", checkToken, getGramaDivisionsIDonly);
router.get("/agent", checkToken, getAgentVerifyList);

router.post("/", checkToken, createGramaDivision);
router.get("/selectofficer", checkToken, getGramaDivisionsToSelectOfficers);
router.get("/selectbox", checkToken, getGramaDivisionsToSelectBox);
router.get("/", checkToken, getGramaDivisions);
router.get("/count", checkToken, getBenifisherCountToGram);
router.get("/verifylist", checkToken, getToBeVerifyList);
router.get("/benifisherlist", checkToken, getBenifisherListToGram);
router.get("/:gram_div_id", checkToken, getGramaDivisionByGramaDivisionID);
router.patch("/", checkToken, updateGramaDivision);
router.delete("/", checkToken, deleteGramaDivision);

module.exports = router;
