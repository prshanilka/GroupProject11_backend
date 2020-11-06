const router = require("express").Router(); 
const {
  createUser,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  login
} = require("./user.controller");
const { checkToken } = require("../../auth/token_validation");

router.post("/",createUser);
router.get("/",checkToken,getUsers);
router.get("/:user_id",checkToken,getUserByUserId);
router.patch("/",checkToken,updateUsers);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);




module.exports = router;