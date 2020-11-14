const router = require("express").Router();
const {
  getGramaDivisionByGramaDivisionID,
} = require("./grama-division.controllers");
const { checkToken } = require("../../auth/token_validation");

router.get("/:elder_id", checkToken, getGramaDivisionByGramaDivisionID);

module.exports = router;
