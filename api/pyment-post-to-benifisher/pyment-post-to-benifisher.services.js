const pool = require("../../config/database");

module.exports = {
  InsertPaymetPostToBenifisher: (data, callBack) => {
    console.log(data);
    pool.query(
      "INSERT INTO `payments_post_office_to_benifishers`( `elder_id`,`divisional_payment_id`, `district_id`, `divisional_id`, `post_office_id`,`agent_id` ,`year`,`month`,`money_amount`,`ajent_available`) SELECT elder.elder_id, (?) ,elder.district_id,elder.divisional_secratory_id,elder.near_post_office_id, agent.agent_id ,?,?,?,? FROM `agent`, `elder` WHERE elder.elder_id IN (SELECT `elder_id` FROM `benifesher`) AND elder.near_post_office_id =? AND elder.elder_id = agent.elder_id",
      [
        data.divisional_payment_id,
        data.year,
        data.month,
        "8990",
        "1",
        data.post_office_id,
      ],
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
      "SELECT * FROM `payments_post_office_to_benifishers` ,`elder` WHERE elder.elder_id = payments_post_office_to_benifishers.elder_id and elder.divisional_secratory_id=?",
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
  getBenifisherPayemtListByPostOffice: (data, callBack) => {
    pool.query(
      "SELECT * FROM `payments_post_office_to_benifishers` ,`elder` WHERE elder.elder_id = payments_post_office_to_benifishers.elder_id and elder.near_post_office_id=? and payments_post_office_to_benifishers.month = ? ",
      [data.post, data.month],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
