const pool = require("../../config/database");

module.exports = {
  getDistricttByID: (district_id, callBack) => {
    pool.query(
      "SELECT * FROM `district` WHERE `district_id` = ?",
      [district_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getDistricts: (callBack) => {
    pool.query(
      "SELECT * FROM `district` WHERE `is_deleted` = 0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createDistrict: (data, callBack) => {
    pool.query(
      "INSERT INTO `district`(`district_id`, `district_name`, `office_address`, `phone_no`, `email`, `bank_account`, `count_of_benifishers_elders`) VALUES (?,?,?,?,?,?,?)",
      [
        data.district_id,
        data.district_name,
        data.office_address,
        data.phone_no,
        data.email,
        data.bank_account,
        data.count_of_benifishers_elders,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateDistrict: (data, callBack) => {
    pool.query(
      "UPDATE `district` SET `district_name`=?,`office_address`=?,`phone_no`=?,`email`=?,`bank_account`=?,`count_of_benifishers_elders`=? WHERE `district_id`=?",
      [
        data.district_name,
        data.office_address,
        data.phone_no,
        data.email,
        data.bank_account,
        data.count_of_benifishers_elders,
        data.district_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteDistrict: (data, callBack) => {
    pool.query(
      "UPDATE `district` SET  `is_deleted` ='1' WHERE `district_id`=?",
      [data.district_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getDistrictsToSelectBox: (callBack) => {
    pool.query(
      "SELECT `district_id` as value, `district_name` as text FROM `district` where `is_deleted`='0'",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
