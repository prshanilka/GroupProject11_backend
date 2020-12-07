const router = require("express").Router();

const {
  createOfficer,
  createGramaOfficer,
  getOfficers,
  getOfficerByOfficerID,
  updateOfficer,
  deleteOfficer,
  GetGramaOfficerByOfficers,
  GetGramaDetails,
  updateGramaOfficer,
  getDiviSionByOfficerID
} = require("./officer_controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", createOfficer);
router.post("/gramaofficer", checkToken, createGramaOfficer);
router.get("/topost/:gramaniladari_division_id", checkToken, GetGramaDetails);
router.get("/topost", checkToken, GetGramaOfficerByOfficers);
router.get("/div", checkToken, getDiviSionByOfficerID);
router.get("/", checkToken, getOfficers);
router.get("/:grmaniladari_officer_id", checkToken, getOfficerByOfficerID);

router.patch("/updategramaofficer", checkToken, updateGramaOfficer);
router.patch("/", checkToken, updateOfficer);
router.delete("/", checkToken, deleteOfficer);

module.exports = router;
