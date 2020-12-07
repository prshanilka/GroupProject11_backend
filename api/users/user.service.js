const pool = require("../../config/database");
module.exports = {
  create: (data,role,table, callBack) => {
    pool.query(
      `INSERT INTO user(user_name,password,email,table_id,role_id) VALUES (?,?,?,?,?)`,
      [data.userName, data.password, data.email,table,role],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(`SELECT * FROM user`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserByUserId: (user_id, callBack) => {
    pool.query(
      `SELECT * FROM user where user_id = ?`,
      [user_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        //console.log(results);
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE user SET id=?,password=?,email=?,role_id=? WHERE user_id=?`,
      [data.id, data.password, data.email, data.role_id, data.user_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from user WHERE user_id=?`,
      [data.user_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserName: (user_name, callBack) => {
    pool.query(
      `SELECT * FROM user where user_name=?`,
      [user_name],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  checkUsername: (userName,callBack) => {
    pool.query(`SELECT * FROM user WHERE user_name=?`, [userName], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
