const pool = require("../../config/database");
module.exports = {
  create: (data, callBack) => {
    pool.query(
        `INSERT INTO post_office_officers(post_office_id,district_id,division,type,designation) VALUES (?,?,?,?,?)`,
        [
            data.post_office_id,
            data.district_id,
            data.division,
            data.type,
            data.designation
        ],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        }
    );
  }
};