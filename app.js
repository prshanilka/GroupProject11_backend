require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const elderRouter = require("./api/elders/elder.router");

app.use(express.json());

<<<<<<< HEAD
app.use("/api/users", userRouter);
app.use("/api/elders", elderRouter);
=======
 
app.use("/api/users",userRouter);
app.use("/api/elders",elderRouter);
 
>>>>>>> 307a36980009683bc2bfd5f1361fec9fcc405bc5
/*
app.get("/api" , (req , res) => {
  res.json({
    success: 1 ,
    message: "This api is working"
  });
});
*/
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running " + process.env.APP_PORT);
});
