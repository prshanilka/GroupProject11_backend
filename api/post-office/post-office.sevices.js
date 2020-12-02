const pool = require("../../config/database");

module.exports = {
  getPostOfficeByPostOfficeID: (post_office_id, callBack) => {
    pool.query(
      "SELECT * FROM `post_office_table` WHERE `is_deleted`=0 and `post_office_id`=?",
      [post_office_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getPaymentInfo: (post_office_id, callBack) => {
    pool.query(
      "SELECT COUNT(*) ,(SELECT value FROM `constants` WHERE `name`='national_elder_wellfare_bank') as 'fund_ac', COUNT(*)*(select CONVERT(`value`, UNSIGNED INTEGER)  from `constants` WHERE `name`='amount_to_per_elder_recives') as total ,COUNT(*)*(select CONVERT(`value`, UNSIGNED INTEGER)  from `constants` WHERE `name`='total_amount_for_elder') as fulltotal  ,COUNT(*)*(select CONVERT(`value`, UNSIGNED INTEGER)  from `constants` WHERE `name`='amount_to_fund_per_elder') as fundtotal  ,post_office_table.bank_account_no , divisional_secratory_office.bank_account FROM `benifesher` ,`elder`,`post_office_table` , divisional_secratory_office WHERE benifesher.elder_id = elder.elder_id AND  elder.near_post_office_id= ? AND post_office_table.post_office_id = elder.near_post_office_id AND divisional_secratory_office.divisional_secratary_id = post_office_table.divisional_id  and benifesher.is_deleted='0'",
      [post_office_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getpostOfficePayHistory: (post_office_id, callBack) => {
    pool.query(
      "SELECT `payment_id` ,`post_office_id`, `check_no`, `date`, `total_money_amount`, `no_qualified_elders`, `amount_of_money_debited_to_centrel_bank`, `sent_amount_to_post_office` , `year`, `month`, `no_of_elders_got_money`, `elders_dose_not_resive_total_money`, `send_date`,`is_completed`, `completed_date` FROM `payments_devisional_to_post_office` WHERE `post_office_id` =? AND is_deleted='0' ORDER BY `payments_devisional_to_post_office`.`payment_id` DESC",
      [post_office_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPostOfficeBenifisherList: (post_office_id, callBack) => {
    pool.query(
      "SELECT * FROM `elder`,`benifesher` WHERE elder.elder_id = benifesher.elder_id AND benifesher.is_deleted =0 and elder.near_post_office_id = ?",
      [post_office_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPostOffices: (callBack) => {
    pool.query(
      "SELECT * FROM `post_office_table` WHERE `is_deleted`=0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createPostOffice: (data, callBack) => {
    pool.query(
      "INSERT INTO `post_office_table` (`post_office_id`, `district_id`, `divisional_id`, `name`, `address`, `phone_no`, `bank_account_no`, `email`, `num_of_offices` ) VALUES (?, ?, ?, ?, ?, ?,?,?, ?)",
      [
        data.post_office_id,
        data.district_id,
        data.divisional_id,
        data.name,
        data.address,
        data.phone_no,
        data.bank_account_no,
        data.email,
        data.num_of_offices,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  endPostPaymentToDivPayId: (data, callBack) => {
    pool.query(
      "UPDATE `payments_devisional_to_post_office` SET `no_of_elders_got_money`= (SELECT COUNT(*) FROM `payments_post_office_to_benifishers` WHERE `divisional_payment_id`=? and `is_taken_money`='1'),`elders_dose_not_resive_total_money`= (SELECT COUNT(*)*1900 FROM `payments_post_office_to_benifishers` WHERE`divisional_payment_id`=? and `is_taken_money`='0'),`is_completed`= '1' ,`send_date`=CURRENT_DATE(),`completed_date`=CURRENT_DATE() WHERE `payment_id`=?",
      [
        data.divisional_payment_id,
        data.divisional_payment_id,
        data.divisional_payment_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatePostOffice: (data, callBack) => {
    pool.query(
      "UPDATE `post_office_table` SET `district_id`=?,`divisional_id`=? ,`name`=?,`address`=?,`phone_no`=?,`bank_account_no`=?,`email`=?,`num_of_offices`=? WHERE `post_office_id`=?",
      [
        data.district_id,
        data.divisional_id,
        data.name,
        data.address,
        data.phone_no,
        data.bank_account_no,
        data.email,
        data.num_of_offices,
        data.post_office_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deletePostOffice: (data, callBack) => {
    pool.query(
      "UPDATE  `post_office_table` SET  `is_deleted`='1' WHERE `post_office_id`=?",
      [data.post_office_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPostOfficesToSelectBox: (callBack) => {
    pool.query(
      "SELECT `post_office_id` as value, `name` as text FROM `post_office_table` WHERE `is_deleted`='0'",
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
