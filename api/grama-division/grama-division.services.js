const pool = require("../../config/database");
module.exports = {
  getGramaDivisionByGramaDivisionID: (elder_id, callBack) => {
    pool.query(
      "SELECT * FROM `gramaniladari_division` WHERE `gramaniladari_division_id` = ?",
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
