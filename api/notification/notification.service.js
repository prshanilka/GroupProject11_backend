const pool = require("../../config/database");

module.exports = {
    createNotification: (data, callBack) => {
    pool.query(
      "INSERT INTO `notification`(  `reciver_id`, `notificaton` ) VALUES ( ?,? )",
      [data.reciver_id , data.notificaton],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
    },
    getNotification: (id ,callBack) => {
    pool.query(
      "SELECT   `reciver_id`, `notificaton`  FROM `notification` WHERE `reciver_id` = ?",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
    },
}