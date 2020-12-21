const router = require("express").Router(); 
const { 
    createNotification,
    getNotification
} = require("./notification.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/",checkToken,createNotification);
 router.get("/",checkToken,getNotification); 




module.exports = router;