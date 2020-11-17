const pool = require("../../config/database");
module.exports = {
  getAgentByAgentID: (elder_id, callBack) => {
    pool.query(
      "SELECT * FROM `agent` WHERE `agent_id` =?",
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getAgent: (callBack) => {
    pool.query(
      "SELECT * FROM `agent` WHERE `is_deleted` = 0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createAgent: (data, callBack) => {
    pool.query(
      "INSERT INTO `agent`( `elder_id`, `name`, `nic`, `address`, `phone`, `email`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.elder_id,
        data.name,
        data.nic,
        data.address,
        data.phone,
        data.email,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateAgent: (data, callBack) => {
    pool.query(
      "UPDATE `agent` SET `elder_id`=?,`name`=?,`nic`=?,`address`=?,`phone`=?,`email`=? WHERE `agent_id`=?",
      [
        data.elder_id,
        data.name,
        data.nic,
        data.address,
        data.phone,
        data.email,
        data.agent_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteAgent: (data, callBack) => {
    pool.query(
      "UPDATE `agent` SET  `is_deleted`='1' WHERE `agent_id`=?",
      [data.agent_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
