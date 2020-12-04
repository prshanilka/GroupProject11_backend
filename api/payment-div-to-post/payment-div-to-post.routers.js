const router = require("express").Router();
const {
  InsertPaymetDivToPost,
  GetPyamentToPostOff,
  GetPyamentHistory,
  getDetailsByMaxPaymentId,
  getpaymentByYears,
  getpaymentByYearMoths,
  GetPyamentToPostOffByYearMonth,
} = require("./payment-div-to-post.controllers");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, InsertPaymetDivToPost);
router.get(
  "/topostbyyearmaonth/:year/:month",
  checkToken,
  GetPyamentToPostOffByYearMonth
);
router.get("/topost", checkToken, GetPyamentToPostOff);
router.get("/max", checkToken, getDetailsByMaxPaymentId);
router.get("/month-by-years/:year", checkToken, getpaymentByYearMoths);
router.get("/years", checkToken, getpaymentByYears);
router.get("/", checkToken, GetPyamentHistory);

module.exports = router;
