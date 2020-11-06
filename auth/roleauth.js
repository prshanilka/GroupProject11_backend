require("dotenv").config(); 
const pool = require("../config/database");
module.exports = {
  checkPermision : (rcid,callBack) => {
    pool.query(
      `SELECT COUNT(role_id) as num FROM rolecapability WHERE role_id=? and cap_id=?`,
      [rcid.role_id,rcid.cap_id],
      (error, results, fields) => {
         if (error){
          return callBack(error);
         }
         if(results[0].num === 1){
          return callBack(null,true);
         }
         return callBack(null,false);
      }
    );
  }
}


