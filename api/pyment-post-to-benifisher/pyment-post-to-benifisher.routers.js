const router = require("express").Router();
const {
  getBenifisherPayemtList,
  getBenifisherPayemtListByDivision,
  getBenifisherPayemtListByPostOffice,
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
router.get("/", checkToken, getBenifisherPayemtList);
module.exports = router;
