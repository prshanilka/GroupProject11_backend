const router = require("express").Router();
const {
  createOfficer,
  getOfficers,
  getOfficerByOfficerID,
  updateOfficers,
  deleteOfficers,
  addPostOfficer,
} = require("./post_officer.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", createOfficer);

router.post("/addpostofficer", addPostOfficer);
router.get("/", checkToken, getOfficers);
router.get("/:officer_id", checkToken, getOfficerByOfficerID);
router.patch("/", checkToken, updateOfficers);
router.delete("/", checkToken, deleteOfficers);

module.exports = router;
