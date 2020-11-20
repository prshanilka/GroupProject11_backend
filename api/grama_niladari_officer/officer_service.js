const pool = require("../../config/database");

module.exports = {
    createOfficer: (data, callBack) => {
        pool.query(
            `INSERT INTO gramaniladari(gramaniladari_division_id,grmaniladari_officer_id,district_id,divisional_secratary_id) VALUES (?,?,?,?)`,
            [
                data.gramaniladari_division_id,
                data.grmaniladari_officer_id,
                data.district_id,
                data.divisional_secratary_id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getOfficers: (callBack) => {
        pool.query(
            `SELECT * FROM gramaniladari`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getOfficerByOfficerID:(grmaniladari_officer_id, callBack) => {
        pool.query(
          `SELECT * FROM gramaniladari WHERE grmaniladari_officer_id=?`,
          [ grmaniladari_officer_id ],
          (error, results, fields) => {
            if(error){
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    },
    updateOfficer: (data, callBack) => {
        pool.query(
          `UPDATE gramaniladari SET gramaniladari_division_id=?,district_id=?,divisional_secratary_id=? WHERE grmaniladari_officer_id=?`,
          [
            data.gramaniladari_division_id,
            data.district_id,
            data.divisional_secratary_id,
            data.grmaniladari_officer_id
          ],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    },
    deleteOfficer: (data, callBack) => {
        pool.query(
          `DELETE FROM gramaniladari WHERE grmaniladari_officer_id=?`,
          [data.grmaniladari_officer_id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    }
};