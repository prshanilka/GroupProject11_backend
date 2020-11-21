const router = require("express").Router();
const {
  getBenifisherByBenifisherID,
  getBenifisher,
  createBenifisher,
  updateBenifisher,
  deleteBenifisher,
} = require("./benifisher.controlers");
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createBenifisher);

router.get("/", checkToken, getBenifisher);
router.get("/:benifisher_id", checkToken, getBenifisherByBenifisherID);
router.patch("/", checkToken, updateBenifisher);
router.delete("/", checkToken, deleteBenifisher);

module.exports = router;
