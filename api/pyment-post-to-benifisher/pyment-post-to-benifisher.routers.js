const router = require("express").Router();
const {
  getBenifisherPayemtList,
  getBenifisherPayemtListByDivision,
  getBenifisherPayemtListByPostOffice,
  payToElder,
  payToAgent,
  getElderHistory,
  updateElderReason,
  getAllPayReport,
} = require("./pyment-post-to-benifisher.controllers");
const { checkToken } = require("../../auth/token_validation");

router.get(
  "/div/:div/:year/:month",
  checkToken,
  getBenifisherPayemtListByDivision
);
router.get(
  "/post/:post/:year/:month",
  checkToken,
  getBenifisherPayemtListByPostOffice
);
router.get("/allpayreport/:div_id", checkToken, getAllPayReport);
router.get("/elderhistory/:eld_id", checkToken, getElderHistory);
router.get("/", checkToken, getBenifisherPayemtList);

router.patch("/elderreason", checkToken, updateElderReason);
router.post("/paytoelder", checkToken, payToElder);

router.post("/paytoagent", checkToken, payToAgent);

module.exports = router;
