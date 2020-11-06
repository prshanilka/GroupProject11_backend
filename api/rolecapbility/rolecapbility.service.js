const pool = require("../../config/database");
module.exports = {
  rolecapabilityRIDCID: (rcid, callBack) => {
    pool.query(
      `SELECT COUNT(role_id) as num FROM rolecapability WHERE role_id=? and cap_id=?`,
      [rcid.role_id,rcid.cap_id],
      (error, results, fields) => {
          if (error){
            return callBack(error);
          }
          return callBack(null,results[0]);
      }
    );
  }

};