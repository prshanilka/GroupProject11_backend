const pool = require("../../config/database");
module.exports = {
  getElderByElderID: (elder_id, callBack) => {
    pool.query(
      `SELECT * FROM elder WHERE elder_id=?`,
      [elder_id],
      (error, results, fields) => {
          if (error){
            return callBack(error);
          }
          return callBack(null,results[0]);
      }
    );
  },
  getElders : callBack => {
    pool.query(
      `SELECT * FROM elder`,
      [],
      (error,results,fields) => {
        if(error){
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

};