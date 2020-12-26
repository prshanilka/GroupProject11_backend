const router = require("express").Router();
const {
  createElders,
  getElderByElderID,
  getElders,
  updateElders,
  deleteElders,
  elderRegistration,
  elderDetailstoPayId,
  getElderDetail,
  updateElderRegistration,
  gramaDivElderRegistration,
  searchElders
} = require("./elder.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createElders);
router.post("/search", checkToken, searchElders);
router.post("/elder-registration", checkToken, elderRegistration);
router.post("/grama-div-elder-registration", checkToken, gramaDivElderRegistration);
router.get("/eldertopatid/:pay_id", checkToken, elderDetailstoPayId);
router.get("/elder_detail", checkToken, getElderDetail);
router.get("/:elder_id", checkToken, getElderByElderID);
router.get("/", checkToken, getElders);

router.patch("/update-elder-registration", checkToken, updateElderRegistration);
router.patch("/", checkToken, updateElders);
router.delete("/", checkToken, deleteElders);

module.exports = router;
