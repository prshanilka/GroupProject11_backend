const router = require("express").Router();
const {
  getApplicationStatus
} = require("./application.controller");

const { checkToken } = require("../../auth/token_validation");
router.get("/status", checkToken, getApplicationStatus);


module.exports = router;
