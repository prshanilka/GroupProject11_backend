const router = require("express").Router();
const {
  getDistricttByID,
  getDistricts,
  createDistrict,
  updateDistrict,
  deleteDistrict,
} = require("./district.controllers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createDistrict);

router.get("/", checkToken, getDistricts);
router.get("/:district_id", checkToken, getDistricttByID);
router.patch("/", checkToken, updateDistrict);
router.delete("/", checkToken, deleteDistrict);

module.exports = router;
