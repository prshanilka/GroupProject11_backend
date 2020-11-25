const pool = require("../../config/database");

module.exports = {
  getApplicationStatus: (elder_id, callBack) => {
    console.log( );
    pool.query(
      `SELECT * FROM verification_of_elders WHERE elder_id =?`,
      [elder_id],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
