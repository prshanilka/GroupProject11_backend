const pool = require("../../config/database");

module.exports = {
  getApplicationStatus: (elder_id, callBack) => {
    console.log(elder_id );
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
  getApplications: (elder_id, callBack) => {
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
  getApplicationsForFofficer: (officer_id, callBack) => {
    pool.query(
      `SELECT * FROM verification_of_elders where elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN(SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?))  AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1`,
      [officer_id],
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
