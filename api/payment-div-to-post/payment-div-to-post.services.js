const pool = require("../../config/database");

module.exports = {
  InsertPaymetDivToPost: (data, callBack) => {
    // console.log(data);
    pool.query(
      "INSERT INTO`payments_devisional_to_post_office`(`district_id`, `divisional_id`, `post_office_id`, `check_no`, `date`, `total_money_amount`, `credite_account_no`,`debited_account_no`, `no_qualified_elders`, `amount_of_money_debited_to_centrel_bank`, `sent_amount_to_post_office`, `centrel_bank_acount_no`,`year`, `month`, `send_date`) VALUES(?, ?, ?, ?, ?,?, ?, ?,(SELECT COUNT(*) FROM `benifesher`,`elder` WHERE benifesher.elder_id = elder.elder_id AND elder.near_post_office_id=?),?, ?, ?, ?, ?, ?) ",
      [
        data.district_id,
        data.divisional_id,
        data.post_office_id,
        data.check_no,
        data.date,

        data.total_money_amount,
        data.credite_account_no,
        data.debited_account_no,
        data.post_office_id,
        data.amount_of_money_debited_to_centrel_bank,
        data.sent_amount_to_post_office,

        data.centrel_bank_acount_no,
        data.year,
        data.month,
        data.send_date,
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
};
