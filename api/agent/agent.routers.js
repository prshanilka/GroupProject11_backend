const router = require("express").Router();
const {
  getAgentByAgentID,
  getAgent,
  createAgent,
  updateAgent,
  deleteAgent,
} = require("./agent.conrollers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createAgent);

router.get("/", checkToken, getAgent);
router.get("/:elder_id", checkToken, getAgentByAgentID);
router.patch("/", checkToken, updateAgent);
router.delete("/", checkToken, deleteAgent);

module.exports = router;
