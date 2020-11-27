const router = require("express").Router();
const {
  InsertPaymetDivToPost,
  GetPyamentToPostOff,
} = require("./payment-div-to-post.controllers");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, InsertPaymetDivToPost);
router.get("/topost", checkToken, GetPyamentToPostOff);

module.exports = router;
