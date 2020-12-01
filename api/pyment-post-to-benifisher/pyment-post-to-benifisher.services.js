const pool = require("../../config/database");

module.exports = {
  InsertPaymetPostToBenifisher: (data, callBack) => {
    console.log(data);
    pool.query(
      "INSERT INTO `payments_post_office_to_benifishers`( `elder_id`,`divisional_payment_id`, `district_id`, `divisional_id`, `post_office_id`, `agent_id`, `year`, `month`,`money_amount`, `ajent_available`)SELECT elder.elder_id, ? , elder.district_id, elder.divisional_secratory_id,elder.near_post_office_id, (SELECT agent.agent_id FROM agent WHERE agent.elder_id = elder.elder_id and agent.is_deleted = '0') as 'agent',? , ?, '1900' , IF((SELECT agent.agent_id FROM agent WHERE agent.elder_id = elder.elder_id and agent.is_deleted = '0') IS Null, '0', '1') as ajent_available FROM`elder`, `benifesher` WHERE elder.elder_id = benifesher.elder_id AND elder.is_deleted = '0' and benifesher.is_deleted = '0' AND elder.near_post_office_id = ? ",
      [data.divisional_payment_id, data.year, data.month, data.post_office_id],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBenifisherPayemtList: (callBack) => {
    pool.query(
      "SELECT * FROM `payments_post_office_to_benifishers` ",
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
  getBenifisherPayemtListByDivision: (data, callBack) => {
    pool.query(
      "SELECT payments_post_office_to_benifishers.payment_id ,elder.elder_id, elder.name , payments_post_office_to_benifishers.money_amount , IF(ajent_available = 1, 'Available', 'No') AS ajent_available, IF(is_taken_money = 1, 'Yes', 'No') AS is_taken_money , elder.nic_id ,elder.number FROM `payments_post_office_to_benifishers` ,`elder` WHERE elder.elder_id = payments_post_office_to_benifishers.elder_id and elder.divisional_secratory_id=? and payments_post_office_to_benifishers.month = ?  and payments_post_office_to_benifishers.year=?",
      [data.div_id, data.month, data.year],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBenifisherPayemtListByPostOffice: (data, callBack) => {
    pool.query(
      "SELECT payments_post_office_to_benifishers.payment_id ,elder.elder_id, elder.name , payments_post_office_to_benifishers.money_amount , IF(ajent_available = 1, 'Available', 'No') AS ajent_available , IF(is_taken_money = 1, 'Yes', 'No') AS is_taken_money ,elder.nic_id ,elder.number FROM `payments_post_office_to_benifishers` ,`elder` WHERE elder.elder_id = payments_post_office_to_benifishers.elder_id and elder.near_post_office_id=? and payments_post_office_to_benifishers.month = ? AND payments_post_office_to_benifishers.year=?",
      [data.post, data.month, data.year],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  payToElder: (data, callBack) => {
    pool.query(
      "UPDATE `payments_post_office_to_benifishers` SET`person_got_money`='elder', `is_taken_money` = '1',`date_and_time_got_money`=CURRENT_TIMESTAMP() WHERE `payments_post_office_to_benifishers`.`payment_id` = ?",
      [data.payment_id],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  payToAgent: (data, callBack) => {
    pool.query(
      "UPDATE `payments_post_office_to_benifishers` SET `person_got_money`='agent', `is_taken_money` = '1',`date_and_time_got_money`=CURRENT_TIMESTAMP() WHERE `payments_post_office_to_benifishers`.`payment_id` = ?",
      [data.payment_id],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getElderHistory: (data, callBack) => {
    console.log(data);

    pool.query(
      "SELECT payments_devisional_to_post_office.year ,payments_devisional_to_post_office.month ,`reson_for_not_take_money`,(`reson_for_not_take_money` IS NOT NULL) as reason,payments_post_office_to_benifishers.payment_id,payments_post_office_to_benifishers.money_amount,payments_post_office_to_benifishers.person_got_money, payments_post_office_to_benifishers.date_and_time_got_money ,payments_post_office_to_benifishers.is_taken_money,payments_devisional_to_post_office.is_completed FROM `payments_post_office_to_benifishers`,`payments_devisional_to_post_office` WHERE payments_post_office_to_benifishers.divisional_payment_id = payments_devisional_to_post_office.payment_id AND `elder_id` = ? ORDER BY `payments_post_office_to_benifishers`.`payment_id` DESC",
      [data],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateElderReason: (data, callBack) => {
    pool.query(
      "UPDATE `payments_post_office_to_benifishers` SET `reson_for_not_take_money`=? WHERE `payment_id`=?",
      [data.reson_for_not_take_money, data.payment_id],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAllPayReport: (data, callBack) => {
    pool.query(
      "SELECT post_office_table.name, elder.near_post_office_id ,COUNT(*) as benifsher, (select CONVERT(`value`, UNSIGNED INTEGER)  from `constants` WHERE `name`='amount_to_per_elder_recives') as per_one_person, COUNT(*)*(select CONVERT(`value`, UNSIGNED INTEGER) from `constants` WHERE`name`='amount_to_per_elder_recives') as all_per_one , COUNT(*)*(select CONVERT(`value`, UNSIGNED INTEGER) from `constants` WHERE `name`='amount_to_fund_per_elder') as to_nationa_fund , COUNT(*)*(select CONVERT(`value`, UNSIGNED INTEGER) from `constants` WHERE `name`='total_amount_for_elder') as total_amount FROM `benifesher`,`elder`,`post_office_table` WHERE post_office_table.post_office_id=elder.near_post_office_id AND benifesher.elder_id = elder.elder_id AND benifesher.is_deleted=0 AND elder.divisional_secratory_id=? GROUP BY elder.near_post_office_id UNION ALL SELECT 'Total',Null,COUNT(*) , NULL,((select count(*) from benifesher WHERE is_deleted='0' )*(select CONVERT(`value`, UNSIGNED INTEGER) from `constants` WHERE `name`='amount_to_per_elder_recives')),sum(((select CONVERT(`value`, UNSIGNED INTEGER) from `constants` WHERE `name`='amount_to_fund_per_elder'))),sum(((select CONVERT(`value`, UNSIGNED INTEGER) from `constants` WHERE `name`='total_amount_for_elder'))) FROM `benifesher`,`elder`,`post_office_table` WHERE post_office_table.post_office_id=elder.near_post_office_id AND benifesher.elder_id = elder.elder_id AND benifesher.is_deleted=0 AND elder.divisional_secratory_id=?",
      [data, data],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCountGotMoney: (data, callBack) => {
    pool.query(
      "SELECT COUNT(*) AS count FROM payments_post_office_to_benifishers WHERE is_taken_money='1' AND divisional_payment_id=?",
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
