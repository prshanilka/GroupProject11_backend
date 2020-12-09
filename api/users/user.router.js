const router = require("express").Router(); 
const {
  createUser,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  login,
  refresh,
  checkUsername,
  createElder
} = require("./user.controller");
const { checkToken,
        checkRToken
 } = require("../../auth/token_validation");




router.post("/refresh",checkRToken,refresh);
router.post("/",createUser);
router.get("/",checkToken,getUsers);
router.get("/:user_id",checkToken,getUserByUserId);
router.patch("/",checkToken,updateUsers);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);
router.post("/checkusername",checkUsername);
router.post("/elderreg",createElder);





module.exports = router;