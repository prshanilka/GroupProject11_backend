const router = require("express").Router();
const {
  createOfficer,
  getOfficers,
  getOfficerByOfficerID,
  updatePPPPOfficers,
  deleteOfficers,
  addPostOfficer,
  getPostOfficers,
  byIdGetPostOfficers,
  updatePostOfficer
} = require("./post_officer.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", createOfficer);

router.post("/addpostofficer", addPostOfficer);
router.get("/officer/byid/:officer_id", byIdGetPostOfficers);
router.get("/getpostofficer", getPostOfficers);
router.get("/", checkToken, getOfficers);
router.get("/:officer_id", checkToken, getOfficerByOfficerID);
router.patch("/updatepostofficer", updatePostOfficer);
router.patch("/", checkToken, updatePPPPOfficers);
router.delete("/", checkToken, deleteOfficers);

module.exports = router;
