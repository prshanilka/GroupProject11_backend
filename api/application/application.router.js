const router = require("express").Router();
const {
  getApplicationStatus,
  getAppliationDofficer,
  selectApplicaton,
  getSelectedAppliationDofficer,
  removeApplicaton,
  submitApplicationReview,
  getAppliationDHead,
  verifyApplicationByHead,
  refreshPrirityList
} = require("./application.controller");

const { checkToken } = require("../../auth/token_validation");
router.get("/status", checkToken, getApplicationStatus);
router.get("/dappdetails", checkToken,  getAppliationDofficer);
router.get("/dsappdetails", checkToken,  getSelectedAppliationDofficer);
router.patch("/selectapplicaton/:vid", checkToken, selectApplicaton);
router.patch("/removeapplicaton/:vid", checkToken, removeApplicaton);
router.get("/dhappdetails", checkToken,  getAppliationDHead);
router.get("/verifydhead/:vid", checkToken, verifyApplicationByHead);
router.get("/priority", refreshPrirityList);


router.post("/applicationreview", checkToken,  submitApplicationReview);
module.exports = router;

