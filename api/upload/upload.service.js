const pool = require("../../config/database");

module.exports = {
    getpropicname: (data, callBack) => {
        pool.query(
            "SELECT   `profile`  FROM `user` WHERE `id`=?  AND `role_id` =?",
            [data.id, data.role_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}