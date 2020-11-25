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
};