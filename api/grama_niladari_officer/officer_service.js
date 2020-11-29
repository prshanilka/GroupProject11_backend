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
    },

    GetGramaOfficerByOfficers: (data, callBack) => {
      pool.query(
        "SELECT officers.name AS oname,gramaniladari_division.name AS dname,officers.email,officers.phone,gramaniladari.grmaniladari_officer_id FROM officers,gramaniladari,gramaniladari_division WHERE officers.officer_id = gramaniladari.grmaniladari_officer_id AND gramaniladari.gramaniladari_division_id = gramaniladari_division.gramaniladari_division_id",
        [],
        (error, results, fields) => {
          if (error) {
            console.log(results);
            return callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    
    GetGramaOfficerByOfficers: (data, callBack) => {
      pool.query(
        "SELECT officers.name AS oname,gramaniladari_division.name AS dname,officers.email,officers.phone,gramaniladari.grmaniladari_officer_id,gramaniladari.gramaniladari_division_id FROM officers,gramaniladari,gramaniladari_division WHERE officers.officer_id = gramaniladari.grmaniladari_officer_id AND gramaniladari.gramaniladari_division_id = gramaniladari_division.gramaniladari_division_id",
        [],
        (error, results, fields) => {
          if (error) {
            console.log(results);
            return callBack(error);
          }
          return callBack(null, results);
        }
      );
    },

    GetGramaDetails: (division_id, callBack) => {
      pool.query(
        "SELECT officers.name AS oname,gramaniladari_division.name AS dname,officers.email AS oemail,officers.phone AS ophone ,officers.nic_no,gramaniladari.grmaniladari_officer_id,gramaniladari.gramaniladari_division_id,gramaniladari.district_id,gramaniladari.divisional_secratary_id,gramaniladari_division.address,gramaniladari_division.number,gramaniladari_division.email AS demail,gramaniladari_division.count_of_benifishers FROM officers,gramaniladari,gramaniladari_division WHERE officers.officer_id = gramaniladari.grmaniladari_officer_id AND gramaniladari.gramaniladari_division_id = gramaniladari_division.gramaniladari_division_id AND gramaniladari_division.gramaniladari_division_id = ?",
        [
          division_id
        ],
        (error, results, fields) => {
          if (error) {
            console.log(results);
            return callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    }
};