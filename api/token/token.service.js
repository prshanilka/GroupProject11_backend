const pool = require("../../config/database");
module.exports = {
  tokenI: (data, callBack) => {
    pool.query(
      `INSERT INTO tokenbl( u_id,token ) VALUES (?,?)`,
      [
        data.id,
        data.token
      ],
      (error, results, fields) => {
          if (error){
            return callBack(error);
          }
          return callBack(null,results[0]);
      }
    );
  },
  tokenD: (user_id, callBack) => {
    pool.query(
      `DELETE FROM tokenbl WHERE u_id=?`,
      [user_id],
      (error, results, fields) => {
          if (error){
            return callBack(error);
          }
          
          return callBack(null,results);
      }
    );
  },
  tokenS: (data, callBack) => {
    pool.query(
      `SELECT COUNT(*) as num FROM tokenbl WHERE  u_id=? and token=?  `,
      [data.user_id,data.token],
      (error, results, fields) => {
          if (error){
            return callBack(error);
          }
          //console.log(results);
          return callBack(null,results[0]);
      }
    );
  },

};