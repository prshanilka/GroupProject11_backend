const pool = require("../../config/database");

module.exports = {
  getpriorityListByElderId: (elder_id, callBack) => {
    pool.query(
      "SELECT * FROM `priority_list` WHERE `elder_id` =  ?",
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getpriorityList: (callBack) => {
    pool.query(
      "SELECT * FROM `priority_list` WHERE `is_deleted` = 0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createpriorityList: (data, callBack) => {
    pool.query(
      "INSERT INTO `priority_list` (`elder_id`, `grmaniladari_officer_id`, `gramaniladari_division_id`, `divisional_secratary_officer_id`, `added_officer_id`, `marks` ) VALUES (?, ?, ?, ?,?,? );",
      [
        data.elder_id,
        data.grmaniladari_officer_id,
        data.gramaniladari_division_id,
        data.divisional_secratary_officer_id,
        data.added_officer_id,
        data.marks,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatepriorityList: (data, callBack) => {
    pool.query(
      "UPDATE `priority_list` SET  `marks`=?  WHERE `elder_id`=?",
      [data.marks, data.elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deletepriorityList: (data, callBack) => {
    pool.query(
      "UPDATE `priority_list` SET   `is_deleted`='1'  WHERE `elder_id`=?",
      [data.elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
