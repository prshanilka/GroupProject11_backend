const router = require("express").Router();
const {
  getDivisionalOfficeByID,
  getDivisionalOffices,
  createDivisionalOffice,
  updateDivisionalOffice,
  deleteDivisionalOffice,
  getApplicationToVerifyByDivision,
} = require("./divisional-office.conrollers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createDivisionalOffice);

router.get("/", checkToken, getDivisionalOffices);

router.get("/list/:div_off_id", checkToken, getApplicationToVerifyByDivision);
router.get("/:div_off_id", checkToken, getDivisionalOfficeByID);
router.patch("/", checkToken, updateDivisionalOffice);
router.delete("/", checkToken, deleteDivisionalOffice);

module.exports = router;
