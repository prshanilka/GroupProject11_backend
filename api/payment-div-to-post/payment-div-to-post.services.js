const pool = require("../../config/database");

module.exports = {
  InsertPaymetDivToPost: (data, callBack) => {
    // console.log(data);
    pool.query(
      "INSERT INTO`payments_devisional_to_post_office`(`district_id`, `divisional_id`, `post_office_id`, `check_no`, `date`, `total_money_amount`,`credite_account_no`, `debited_account_no`, `no_qualified_elders`, `amount_of_money_debited_to_centrel_bank`, `sent_amount_to_post_office`,`centrel_bank_acount_no`, `year`, `month`, `send_date`) VALUES(?, ?, ?, ?, ?,?, ?, ?, (SELECT COUNT(*) FROM`elder`, `benifesher` WHERE benifesher.elder_id = elder.elder_id AND elder.is_deleted = '0' AND benifesher.is_deleted = '0' AND elder.near_post_office_id = ?),?, ?, ?, ?, ?, ?) ",
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
  GetPyamentToPostOff: (data, callBack) => {
    pool.query(
      "SELECT 	post_office_table.post_office_id, post_office_table.name ,post_office_table.address,post_office_table.bank_account_no, payments_devisional_to_post_office.year,payments_devisional_to_post_office.month ,payments_devisional_to_post_office.total_money_amount FROM `payments_devisional_to_post_office`,`post_office_table` WHERE payments_devisional_to_post_office.post_office_id = post_office_table.post_office_id",
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

  GetPyamentToPostOffByYearMonth: (data, callBack) => {
    pool.query(
      "SELECT   payments_devisional_to_post_office.payment_id , post_office_table.post_office_id, post_office_table.name ,post_office_table.address,post_office_table.bank_account_no, payments_devisional_to_post_office.year,payments_devisional_to_post_office.month , months.m_name ,payments_devisional_to_post_office.total_money_amount FROM `months` , `payments_devisional_to_post_office`,`post_office_table` WHERE  months.month_id=payments_devisional_to_post_office.month  and payments_devisional_to_post_office.post_office_id = post_office_table.post_office_id AND payments_devisional_to_post_office.year = ? and payments_devisional_to_post_office.month=?",
      [data.year, data.month],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  GetPyamentHistory: (callBack) => {
    pool.query(
      "SELECT post_office_table.name,payments_devisional_to_post_office.payment_id,payments_devisional_to_post_office.check_no,payments_devisional_to_post_office.date,payments_devisional_to_post_office.no_qualified_elders,payments_devisional_to_post_office.sent_amount_to_post_office,payments_devisional_to_post_office.year,payments_devisional_to_post_office.month,payments_devisional_to_post_office.no_of_elders_got_money,payments_devisional_to_post_office.send_date,payments_devisional_to_post_office.completed_date,payments_devisional_to_post_office.is_completed FROM payments_devisional_to_post_office,post_office_table WHERE post_office_table.post_office_id=payments_devisional_to_post_office.post_office_id ORDER BY `payments_devisional_to_post_office`.`payment_id` DESC",
      [],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDetailsByMaxPaymentId: (off_id, callBack) => {
    pool.query(
      "SELECT * FROM payments_devisional_to_post_office WHERE payment_id=(SELECT MAX(payment_id)FROM payments_devisional_to_post_office , post_office_table ,post_office_officers where payments_devisional_to_post_office.post_office_id= post_office_table.post_office_id and post_office_table.post_office_id = post_office_officers.post_office_id AND post_office_officers.officer_id = ? )",
      [off_id],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getpaymentByYears: (callBack) => {
    console.log("now");

    pool.query(
      "SELECT year , count(*) , SUM(`total_money_amount`) as year_tot , SUM(`amount_of_money_debited_to_centrel_bank`) as year_to_fund , SUM(`sent_amount_to_post_office`) as year_to_post  FROM `payments_devisional_to_post_office` GROUP BY year  ORDER BY`payments_devisional_to_post_office`.`payment_id`  DESC",
      [],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getpaymentByYearMoths: (year, callBack) => {
    pool.query(
      "SELECT  payments_devisional_to_post_office.year ,months.month_id, months.m_name , COUNT(*)  as count,  SUM(payments_devisional_to_post_office.total_money_amount) as total , SUM(payments_devisional_to_post_office.amount_of_money_debited_to_centrel_bank) as fund  , SUM(payments_devisional_to_post_office.sent_amount_to_post_office) as tot_post FROM `payments_devisional_to_post_office`,`months` WHERE  payments_devisional_to_post_office.month = months.month_id   AND payments_devisional_to_post_office.year =? GROUP by month ORDER BY payments_devisional_to_post_office.payment_id DESC",
      [year],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
