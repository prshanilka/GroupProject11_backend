const router = require("express").Router();
const {
  getCriteria
} = require("./marks.controller");

const { checkToken } = require("../../auth/token_validation");


router.get("/criteria", checkToken, getCriteria);


module.exports = router;
