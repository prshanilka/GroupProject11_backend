const router = require("express").Router();
const { InsertPaymetDivToPost } = require("./payment-div-to-post.controllers");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, InsertPaymetDivToPost);

module.exports = router;
