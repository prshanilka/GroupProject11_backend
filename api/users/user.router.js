const router = require("express").Router(); 
const {
  createUser,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  login,
  refresh
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





module.exports = router;