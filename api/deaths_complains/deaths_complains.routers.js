const router = require("express").Router();
const {

  informDeath,
  sendComplain,
  getDeaths,
  getComplains

} = require("./deaths_complains.controllers");
const { checkToken } = require("../../auth/token_validation");

router.get("/deaths", checkToken, getDeaths);
router.get("/complains", checkToken, getComplains);
router.post("/informdeath", checkToken, informDeath);
router.post("/sendcomplain", checkToken, sendComplain);


module.exports = router;
