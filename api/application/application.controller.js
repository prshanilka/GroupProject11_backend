const { getApplicationStatus } = require("./application.service");
const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  getApplicationStatus: (req, res) => {
    const elder_id = req.auth.result.user_id;
    // console.log(elder_id);

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
};