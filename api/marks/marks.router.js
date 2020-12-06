const router = require("express").Router();
const {
  getCriteria,
  insertCriteria,
  deleteCriteria
} = require("./marks.controller");

const { checkToken } = require("../../auth/token_validation");


router.get("/criteria", checkToken, getCriteria);
router.post("/", checkToken, insertCriteria);
router.patch("/:cri_id", checkToken, deleteCriteria);

module.exports = router;
