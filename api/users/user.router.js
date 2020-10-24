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

router.post("/users",createUser);
router.get("/users",checkToken,getUsers);
router.get("/users/:user_id",checkToken,getUserByUserId);
router.patch("/users",checkToken,updateUsers);
router.delete("/users",checkToken,deleteUser);
router.post("/users/login",login);



module.exports = router;