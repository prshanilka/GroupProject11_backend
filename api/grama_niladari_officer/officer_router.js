const router = require("express").Router();

const {
  createOfficer,
  createGramaOfficer,
  getOfficers,
  getOfficerByOfficerID,
  updateOfficer,
  deleteOfficer,
  GetGramaOfficerByOfficers,
  GetGramaDetails
} = require("./officer_controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", createOfficer);
router.post("/gramaofficer", createGramaOfficer);
router.get("/topost/:gramaniladari_division_id", checkToken, GetGramaDetails);
router.get("/topost", checkToken, GetGramaOfficerByOfficers);
router.get("/", checkToken, getOfficers);
router.get("/:grmaniladari_officer_id", checkToken, getOfficerByOfficerID);

router.patch("/", checkToken, updateOfficer);
router.delete("/", checkToken, deleteOfficer);

module.exports = router;
