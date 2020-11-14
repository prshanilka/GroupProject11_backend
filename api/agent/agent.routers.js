const router = require("express").Router();
const { getAgentByAgentID, getAgent } = require("./agent.conrollers");
const { checkToken } = require("../../auth/token_validation");

router.get("/:elder_id", checkToken, getAgentByAgentID);
router.get("/", checkToken, getAgent);

module.exports = router;
