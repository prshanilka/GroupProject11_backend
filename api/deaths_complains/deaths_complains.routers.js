const router = require("express").Router();
const {

  informDeath,
  sendComplain,
  getDeaths,
  getComplains,
  sendPostComplain,
  getPostComplains,
  updateDeath,
  updateComplain

} = require("./deaths_complains.controllers");
const { checkToken } = require("../../auth/token_validation");

router.get("/deaths", checkToken, getDeaths);
router.get("/complains", checkToken, getComplains);
router.get("/postcomplains", checkToken, getPostComplains);
router.post("/informdeath", checkToken, informDeath);
router.post("/sendcomplain", checkToken, sendComplain);
router.post("/sendpostcomplain", checkToken, sendPostComplain);
router.patch("/:id", checkToken, updateDeath);
router.patch("/comp/:id", checkToken, updateComplain);

module.exports = router;
