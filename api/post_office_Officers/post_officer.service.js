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
  },
  getOfficers: callBack => {
    pool.query(
      `SELECT * FROM post_office_officers`,
      [],
      (error,results,fields) => {
          if(error){
              return callBack(error);
          }
          return callBack(null,results);
      }
    );
  },
  getOfficerByOfficerID:(officer_id, callBack) => {
    pool.query(
      `SELECT * FROM post_office_officers WHERE officer_id=?`,
      [ officer_id ],
      (error, results, fields) => {
        if(error){
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateOfficers: (data, callBack) => {
    pool.query(
      `UPDATE post_office_officers SET post_office_id=?,district_id=?,division=?,type=?,designation=? WHERE officer_id=?`,
      [
        data.post_office_id,
        data.district_id,
        data.division,
        data.type,
        data.designation,
        data.officer_id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteOfficers: (data, callBack) => {
    pool.query(
      `DELETE FROM post_office_officers WHERE officer_id=?`,
      [data.officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};