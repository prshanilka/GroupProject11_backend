const pool = require("../../config/database");

module.exports = {
  getBenifisherByBenifisherID: (benifisher_id, callBack) => {
    pool.query(
      "SELECT * FROM `benifesher` WHERE `benifesher_id` = ?",
      [benifisher_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getBenifisher: (callBack) => {
    pool.query(
      "SELECT * FROM `benifesher` WHERE `is_deleted` = 0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createBenifisher: (data, callBack) => {
    pool.query(
      "INSERT INTO `agent`( `elder_id`, `name`, `nic`, `address`, `phone`, `email`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.elder_id,
        data.name,
        data.nic,
        data.address,
        data.phone,
        data.email,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateBenifisher: (data, callBack) => {
    pool.query(
      "UPDATE `benifesher` SET  `elder_id`= ?,`added_officer_id`=?, `removed_officer_id`=?   WHERE `benifesher_id`=?",
      [
        data.elder_id,
        data.added_officer_id,
        data.removed_officer_id,
        data.benifesher_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteBenifisher: (data, callBack) => {
    pool.query(
      "UPDATE `benifesher` SET  `is_deleted`='1' WHERE `benifesher_id`=?",
      [data.benifesher_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
