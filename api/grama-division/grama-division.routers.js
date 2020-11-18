const router = require("express").Router();
const {
  getGramaDivisionByGramaDivisionID,
  createGramaDivision,
  getGramaDivisions,
  updateGramaDivision,
  deleteGramaDivision,
} = require("./grama-division.controllers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createGramaDivision);

router.get("/", checkToken, getGramaDivisions);
router.get("/:gram_div_id", checkToken, getGramaDivisionByGramaDivisionID);
router.patch("/", checkToken, updateGramaDivision);
router.delete("/", checkToken, deleteGramaDivision);

module.exports = router;
