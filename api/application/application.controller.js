const {
        getApplicationStatus,
        getApplicationsForFofficer
      } = require("./application.service");
const { getOfficerByOfficerID } = require("../divisional_secratary_officer/divisional_officer.service");      
const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  getApplicationStatus: (req, res) => {
    const elder_id = req.auth.result.user_id;
  getApplicationStatus(elder_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }

      if (results.validity_by_gramaniladari == 0) {
        return res.json({
          success: 1,
          presentage:0,
          correction:results.correction,
          title:"elder.gramaniladari"
        });
      }
      if (results.validity_by_divisional_officer == 0) {
        return res.json({
          success: 1,
          presentage:20,
          correction:results.correction,
          title:"elder.divisional_officer"
        });
      }
      if (results.validity_by_divisional_head == 0) {
        return res.json({
          success: 1,
          presentage:70,
          correction:results.correction,
          title:"elder.divisional_head"
        });
      }


      if (results.validity_by_divisional_head == 1) {
        return res.json({
          success: 1,
          presentage:100,
          title:"elder.divisional_head"
        });
      }
      if (results.validity_by_divisional_officer == 1) {
        return res.json({
          success: 1,
          presentage:70,
          title:"elder.divisional_officer"
        });
      }
      if (results.validity_by_gramaniladari == 1) {
        return res.json({
          success: 1,
          presentage:20,
          title:"elder.gramaniladari"
        });
      }




     
      return res.json({
        success: 1,
        presentage:0
      });
    });
  },
  getAppliationDofficer: (req, res) => {
    checkPermision( {role_id: req.auth.result.role_id,cap_id: 21,}, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          error: "Unauthorized access",
        });
      }
    });
    let divitionalid =new Promise((resolove, reject) => {
      getApplicationsForFofficer(req.auth.result.id, (err,results) =>{
        if (err){
          console.log(err);
          reject(err)
        }
        if(!results){
         reject("ERROR NO USER DATA")
        }
        resolove(results);
      });
    });

  divitionalid.then((me) =>{
      return res.json({
        success: 1,
        error: me,
    });
  }).catch((error) =>{console.log(error)});


  

  },
  
};
