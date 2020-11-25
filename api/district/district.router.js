const router = require("express").Router();
const {
  getDistricttByID,
  getDistricts,
  createDistrict,
  updateDistrict,
  deleteDistrict,
  getDistrictsToSelectBox,
} = require("./district.controllers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createDistrict);

router.get("/selectbox", checkToken, getDistrictsToSelectBox);
router.get("/", checkToken, getDistricts);
router.get("/:district_id", checkToken, getDistricttByID);
router.patch("/", checkToken, updateDistrict);
router.delete("/", checkToken, deleteDistrict);

module.exports = router;
