const router = require("express").Router();
const {
  getPostOfficeByPostOfficeID,
  getPostOffices,
  createPostOffice,
  updatePostOffice,
  deletePostOffice,
  getPostOfficesToSelectBox
} = require("./post-office.controllers");
const { checkToken } = require("../../auth/token_validation");

router.get("/selectbox",checkToken,getPostOfficesToSelectBox);
router.post("/", checkToken, createPostOffice);

router.get("/", checkToken, getPostOffices);
router.get("/:post_office_id", checkToken, getPostOfficeByPostOfficeID);
router.patch("/", checkToken, updatePostOffice);
router.delete("/", checkToken, deletePostOffice);

module.exports = router;