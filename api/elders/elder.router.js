const router = require("express").Router();
const {
  createElders,
  getElderByElderID,
  getElders,
  updateElders,
  deleteElders,
  elderRegistration,
  elderDetailstoPayId,
} = require("./elder.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createElders);
router.post("/elder-registration", checkToken, elderRegistration);
router.get("/eldertopatid/:pay_id", checkToken, elderDetailstoPayId);
router.get("/:elder_id", checkToken, getElderByElderID);
router.get("/", checkToken, getElders);

router.patch("/", checkToken, updateElders);
router.delete("/", checkToken, deleteElders);

module.exports = router;
