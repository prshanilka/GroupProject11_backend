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
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
