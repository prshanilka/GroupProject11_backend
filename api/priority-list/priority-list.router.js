const router = require("express").Router();
const {
  getpriorityListByElderId,
  getpriorityList,
  createpriorityList,
  updatepriorityList,
  deletepriorityList,
} = require("./priority-list.controllers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createpriorityList);

router.get("/", checkToken, getpriorityList);
router.get("/:elder_id", checkToken, getpriorityListByElderId);
router.patch("/", checkToken, updatepriorityList);
router.delete("/", checkToken, deletepriorityList);

module.exports = router;
