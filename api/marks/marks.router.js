const router = require("express").Router();
const {
  getCriteria,
  insertCriteria,
  deleteCriteria,
  getMarksByvID
} = require("./marks.controller");

const { checkToken } = require("../../auth/token_validation");


router.get("/criteria", checkToken, getCriteria);
router.post("/", checkToken, insertCriteria);
router.patch("/:cri_id", checkToken, deleteCriteria);
router.get("/getmarks/:vid", checkToken, getMarksByvID);
module.exports = router;
