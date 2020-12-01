const router = require("express").Router();
const {
  InsertPaymetDivToPost,
  GetPyamentToPostOff,
  GetPyamentHistory,
  getDetailsByMaxPaymentId
} = require("./payment-div-to-post.controllers");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, InsertPaymetDivToPost);
router.get("/topost", checkToken, GetPyamentToPostOff);
router.get("/max",checkToken,getDetailsByMaxPaymentId);
router.get("/",checkToken,GetPyamentHistory);

module.exports = router;
