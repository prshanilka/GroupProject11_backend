const router = require("express").Router();
const {
  getpriorityListByElderId,
  getpriorityList,
  createpriorityList,
  updatepriorityList,
  deletepriorityList,
  getpriorityListbydiv,
} = require("./priority-list.controllers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createpriorityList);

router.get("/div/:div_id", checkToken, getpriorityListbydiv);
router.get("/:elder_id", checkToken, getpriorityListByElderId);
router.get("/", checkToken, getpriorityList);
router.patch("/", checkToken, updatepriorityList);
router.delete("/", checkToken, deletepriorityList);

module.exports = router;
