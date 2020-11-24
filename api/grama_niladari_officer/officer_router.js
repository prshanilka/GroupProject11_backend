const router = require("express").Router();

const {
  createOfficer,
  createGramaOfficer,
  getOfficers,
  getOfficerByOfficerID,
  updateOfficer,
  deleteOfficer,
} = require("./officer_controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", createOfficer);
router.post("/gramaofficer", createGramaOfficer);
router.get("/", checkToken, getOfficers);
router.get("/:grmaniladari_officer_id", checkToken, getOfficerByOfficerID);
router.patch("/", checkToken, updateOfficer);
router.delete("/", checkToken, deleteOfficer);

module.exports = router;
