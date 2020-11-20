require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const elderRouter = require("./api/elders/elder.router");
const officerRouter = require("./api/officers/officer.router");

const agentRouter = require("./api/agent/agent.routers");
const gramaDivisionRouters = require("./api/grama-division/grama-division.routers");
const districtDivision = require("./api/district/district.router");
const postOffice = require("./api/post-office/post-office.routers");
const divisionalOffice = require("./api/divisional-office/divisional-office.routers");
const postOfficer = require("./api/post_office_Officers/post_officer.router");
const divisionalofficer = require("./api/divisional_secratary_officer/divisional_officer.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/elders", elderRouter);
app.use("/api/officers", officerRouter);
app.use("/api/agent", agentRouter);
app.use("/api/gramadivision", gramaDivisionRouters);
app.use("/api/district", districtDivision);
app.use("/api/postoffice", postOffice);
app.use("/api/divisionaloffice", divisionalOffice);
app.use("/api/postofficers", postOfficer);
app.use("./api/divisionalofficers", divisionalofficer);

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
