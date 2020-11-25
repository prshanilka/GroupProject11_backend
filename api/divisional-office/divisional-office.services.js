const pool = require("../../config/database");

module.exports = {
  getDivisionalOfficeByID: (div_off_id, callBack) => {
    pool.query(
      "SELECT * FROM `divisional_secratory_office` WHERE `divisional_secratary_id` = ? and `is_deleted` = '0'",
      [div_off_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getDivisionalOffices: (callBack) => {
    pool.query(
      "SELECT * FROM `divisional_secratory_office` WHERE `is_deleted` = 0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createDivisionalOffice: (data, callBack) => {
    pool.query(
      "INSERT INTO `divisional_secratory_office` (`divisional_secratary_id`, `district_id`, `name`, `address`, `number`, `email`, `bank_account`, `no_of_officers` , `count_of_benifishers_elders` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
      [
        data.divisional_secratary_id,
        data.district_id,
        data.name,
        data.address,
        data.number,
        data.email,
        data.bank_account,
        data.no_of_officers,
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
  updateDivisionalOffice: (data, callBack) => {
    pool.query(
      "UPDATE `divisional_secratory_office` SET `district_id`=?,`name`=?,`address`=?,`number`=?,`email`=?,`bank_account`=?,`no_of_officers`=?,`count_of_benifishers_elders`=? WHERE `divisional_secratary_id`=?",
      [
        data.district_id,
        data.name,
        data.address,
        data.number,
        data.email,
        data.bank_account,
        data.no_of_officers,
        data.count_of_benifishers_elders,
        data.divisional_secratary_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteDivisionalOffice: (data, callBack) => {
    pool.query(
      "UPDATE `divisional_secratory_office` SET  `is_deleted`='1' WHERE `divisional_secratary_id`=?",
      [data.divisional_secratary_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getApplicationToVerifyByDivision: (data, callBack) => {
    pool.query(
      "SELECT * FROM `elder` WHERE `elder_id` IN (SELECT `elder_id` FROM `verification_of_elders` WHERE `is_deleted` = '0' and `validity_by_gramaniladari`='1' and `validity_by_divisional_officer`  IS NULL) and `divisional_secratory_id` = ?",
      [data],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
