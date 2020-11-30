const router = require("express").Router();
const {
  getApplicationStatus,
  getAppliationDofficer
} = require("./application.controller");

const { checkToken } = require("../../auth/token_validation");
router.get("/status", checkToken, getApplicationStatus);
router.get("/dappdetails", checkToken,  getAppliationDofficer);


module.exports = router;
