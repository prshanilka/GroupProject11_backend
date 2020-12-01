require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/users/user.router");
const tokenRouter = require("./api/token/token.router");
const elderRouter = require("./api/elders/elder.router");
const officerRouter = require("./api/officers/officer.router");
const agentRouter = require("./api/agent/agent.routers");
const gramaDivisionRouters = require("./api/grama-division/grama-division.routers");
const districtDivision = require("./api/district/district.router");
const postOffice = require("./api/post-office/post-office.routers");
const divisionalOffice = require("./api/divisional-office/divisional-office.routers");
const postOfficer = require("./api/post_office_Officers/post_officer.router");
const divisionalofficer = require("./api/divisional_secratary_officer/divisional_officer.router");
const benifisher = require("./api/benifisher/benifisher.router");
const priorityList = require("./api/priority-list/priority-list.router");
const gramaOfficer = require("./api/grama_niladari_officer/officer_router");
const verifyElder = require("./api/verify_elder/verify_elder.router");
const application = require("./api/application/application.router");
const paymentdivtopost = require("./api/payment-div-to-post/payment-div-to-post.routers");
const paymentposttoben = require("./api/pyment-post-to-benifisher/pyment-post-to-benifisher.routers");
const marksRouter = require("./api/marks/marks.router");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/elders", elderRouter);
app.use("/api/token", tokenRouter);
app.use("/api/officers", officerRouter);
app.use("/api/agent", agentRouter);
app.use("/api/gramadivision", gramaDivisionRouters);
app.use("/api/district", districtDivision);
app.use("/api/postoffice", postOffice);
app.use("/api/divisionaloffice", divisionalOffice);
app.use("/api/postofficers", postOfficer);
app.use("/api/divisionalofficers", divisionalofficer);
app.use("/api/benifisher", benifisher);
app.use("/api/prioritylist", priorityList);
app.use("/api/gramaniladariofficer", gramaOfficer);
app.use("/api/verifyelder", verifyElder);
app.use("/api/application", application);
app.use("/api/paymentdivoff", paymentdivtopost);
app.use("/api/paymentposttoben", paymentposttoben);
app.use("/api/application",application)
app.use("/api/marks", marksRouter);

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
