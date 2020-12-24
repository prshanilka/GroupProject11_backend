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
  getBenifisherListTodiv: (officer_id, callBack) => {
    pool.query(
      "SELECT * FROM `elder`,`benifesher` WHERE elder.elder_id = benifesher.elder_id AND benifesher.is_deleted =0 and elder.divisional_secratory_id =?",
      [officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
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
  getDivisionsToSelectBox: (callBack) => {
    pool.query(
      "SELECT `divisional_secratary_id` as value, `name` as text FROM `divisional_secratory_office` WHERE `is_deleted`='0'",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getConstant:(callBack) => {
    pool.query(
      "SELECT * FROM constants",
      [],
      (error, results, fields) => {
        if(error){
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateConstant:(data,callBack) => {
    pool.query(
      "UPDATE constants SET value=? WHERE name=?",
      [
        data.value,
        data.name
      ],
      (error, results, fields) => {
        if(error){
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  officeDetails:(office_id,callBack) => {
    pool.query(
      "SELECT COUNT(post_office_table.post_office_id) AS post,divisional_secratory_office.name,divisional_secratory_office.count_of_benifishers_elders FROM divisional_secratory_office,post_office_table WHERE divisional_secratory_office.divisional_secratary_id = post_office_table.divisional_id AND post_office_table.is_deleted = '0' AND divisional_secratory_office.is_deleted = '0' AND divisional_secratory_office.divisional_secratary_id = ?",
      [
        office_id
      ],
      (error, results, fields) => {
        if(error){
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
