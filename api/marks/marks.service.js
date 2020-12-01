const pool = require("../../config/database");

module.exports = {
  getCriteria: (callBack) => {
    pool.query(
      `SELECT criteria_id,criteria FROM criteria WHERE is_deleted=?`
      ,[0]
      ,
      (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },

};
