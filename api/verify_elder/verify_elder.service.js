const pool = require("../../config/database");

module.exports = {
  createverifyFirstElder: (data, callBack) => {
    pool.query(
      `INSERT INTO verification_of_elders(elder_id,gramaniladari_id ) VALUES (?,?)`,
      [data.elder_id, data.gramaniladari_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createverifyElder: (data, callBack) => {
    pool.query(
      `INSERT INTO verification_of_elders(elder_id,gramaniladari_id,divisional_officer_id,divisional_head_id,gramaniladari_comment,divisional_officers_comment,divisional_head_comment,validity_by_gramaniladari,validity_by_divisional_officer,validity_by_divisional_head,correction) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.elder_id,
        data.gramaniladari_id,
        data.divisional_officer_id,
        data.divisional_head_id,
        data.gramaniladari_comment,
        data.divisional_officers_comment,
        data.divisional_head_comment,
        data.validity_by_gramaniladari,
        data.validity_by_divisional_officer,
        data.validity_by_divisional_head,
        data.correction,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getverifyElderByElderID: (elder_id, callBack) => {
    pool.query(
      `SELECT * FROM verification_of_elders WHERE elder_id=?`,
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getverifyElder: (callBack) => {
    pool.query(
      `SELECT * FROM verification_of_elders`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateverifyElder: (data, callBack) => {
    pool.query(
      `UPDATE verification_of_elders SET gramaniladari_id=?,divisional_officer_id=?,divisional_head_id=?,gramaniladari_comment=?,divisional_officers_comment=?,divisional_head_comment=?,validity_by_gramaniladari=?,validity_by_divisional_officer=?,validity_by_divisional_head=?, correction=? WHERE elder_id=?`,
      [
        data.gramaniladari_id,
        data.divisional_officer_id,
        data.divisional_head_id,
        data.gramaniladari_comment,
        data.divisional_officers_comment,
        data.divisional_head_comment,
        data.validity_by_gramaniladari,
        data.validity_by_divisional_officer,
        data.validity_by_divisional_head,
        data.correction,
        data.elder_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteverifyElder: (data, callBack) => {
    pool.query(
      `DELETE FROM verification_of_elders WHERE elder_id=?`,
      [data.elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getverifyElderGramaID: (body, callBack) => {
    pool.query(
      "SELECT `elder_id` FROM `verification_of_elders` WHERE `gramaniladari_id`= ?  and `is_deleted` ='0' and `validity_by_gramaniladari` IS NULL",
      [body],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
