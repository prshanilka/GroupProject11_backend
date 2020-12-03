const router = require("express").Router();
const {
  getPostOfficeByPostOfficeID,
  getPostOffices,
  createPostOffice,
  updatePostOffice,
  deletePostOffice,
  getPostOfficesToSelectBox,
  getPostOfficeBenifisherList,
  getpostOfficePayHistory,
  endPostPaymentToDivPayId,
  getPaymentInfo,
} = require("./post-office.controllers");
const { checkToken } = require("../../auth/token_validation");

router.get("/selectbox", checkToken, getPostOfficesToSelectBox);
router.post("/", checkToken, createPostOffice);

router.get("/", checkToken, getPostOffices);

router.get(
  "/benfisherslist/:post_office_id",
  checkToken,
  getPostOfficeBenifisherList
);
router.get("/patmentinfo/:post_office_id", checkToken, getPaymentInfo);
router.get("/paymenthistory", checkToken, getpostOfficePayHistory);
router.get("/:post_office_id", checkToken, getPostOfficeByPostOfficeID);

router.patch("/endpostpayment", checkToken, endPostPaymentToDivPayId);
router.patch("/", checkToken, updatePostOffice);
router.delete("/", checkToken, deletePostOffice);

module.exports = router;
