const router = require("express").Router();
const {
  getAgentByAgentID,
  getAgentByElderID,
  getQulifyAgentByElderID,
  getAgent,
  createAgent,
  updateCorrectAgent,
  deleteAgent,
  updateDisqulifyAgent
} = require("./agent.conrollers");
const { checkToken } = require("../../auth/token_validation");

router.get("/qulify", checkToken, getQulifyAgentByElderID);
router.get("/elder/:elder_id", checkToken, getAgentByElderID);
router.get("/aid/:elder_id", checkToken, getAgentByAgentID);
router.post("/", checkToken, createAgent);

router.get("/", checkToken, getAgent);

router.patch("/disq", checkToken, updateDisqulifyAgent);
router.patch("/", checkToken, updateCorrectAgent);
router.delete("/", checkToken, deleteAgent);

module.exports = router;
