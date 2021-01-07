const pool = require("../../config/database");
module.exports = {
  createOffOfficer: (data, callBack) => {
    pool.query(
      `INSERT INTO officers(officer_id,nic_no,name,email,phone) VALUES (?,?,?,?,?)`,
      [data.officer_id, data.nic_no, data.name, data.email, data.phone],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO officers(officer_id,nic_no,name,email,phone) VALUES (?,?,?,?,?)`,
      [data.officer_id, data.nic_no, data.name, data.email, data.phone],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOfficerByOfficerID: (officer_id, callBack) => {
    pool.query(
      `SELECT * FROM officers WHERE officer_id=?`,
      [officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getOfficers: (callBack) => {
    pool.query(`SELECT * FROM officers`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  updateOfficers: (data, callBack) => {
    pool.query(
      `UPDATE officers SET  nic_no=? ,name=? ,email=? ,phone=? where officer_id=? `,
      [data.nic_no, data.name, data.email, data.phone, data.officer_id],
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
      `DELETE FROM officers WHERE officer_id=?`,
      [data.officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
