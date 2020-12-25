const pool = require("../../config/database");
module.exports = {
  createOfficers: (data, callBack) => {
    pool.query(
      `INSERT INTO divisional_secratory_officer(officer_id,divisional_secratary_id,designation,role,type,area) VALUES (?,?,?,?,?,?)`,
      [
        data.officer_id,
        data.divisional_secratary_id,
        data.designation,
        data.role,
        data.type,
        data.area,
      ],
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
      `SELECT * FROM divisional_secratory_officer WHERE officer_id=?`,
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
    pool.query(
      `SELECT * FROM divisional_secratory_officer`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOfficers: (callBack) => {
    pool.query(
      `SELECT * FROM divisional_secratory_officer`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateOfficers: (data, callBack) => {
    pool.query(
      `UPDATE divisional_secratory_officer SET officer_id=?,divisional_secratary_id=?,designation=?,role=?,type=?,area=?`,
      [
        data.officer_id,
        data.divisional_secratary_id,
        data.designation,
        data.role,
        data.type,
        data.area,
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
      `DELETE FROM divisional_secratory_officer WHERE officer_id=?`,
      [data.officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getOfficersFromVID:(vid, callBack) => {
    pool.query(
      `SELECT * FROM divisional_secratory_officer WHERE officer_id=?`,
      [vid],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
