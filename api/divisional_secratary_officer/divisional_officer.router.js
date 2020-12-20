const router = require("express").Router();
const {
  createOfficers,
  getOfficerByOfficerID,
  getOfficers,
  updateOfficers,
  deleteOfficers,
  getOfficersFromVID,
} = require("./divisional_officer.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createOfficers);

router.get("/:officer_id", checkToken, getOfficerByOfficerID);
router.get("/", checkToken, getOfficers);
router.patch("/", checkToken, updateOfficers);
router.delete("/", checkToken, deleteOfficers);
router.get("/relofficervid/:vid", checkToken, getOfficersFromVID );

module.exports = router;
