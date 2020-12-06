const pool = require("../../config/database");
module.exports = {
  getAgentByAgentID: (elder_id, callBack) => {
    pool.query(
      "SELECT * FROM `agent` WHERE `is_deleted` = '0' AND`agent_id` =?",
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getAgentByElderID: (elder_id, callBack) => {
    pool.query(
      "SELECT * FROM `agent` WHERE `elder_id` =? AND `is_deleted` = 0",
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getQulifyAgentByElderID: (elder_id, callBack) => {
    pool.query(
      "SELECT * FROM `agent` WHERE `agent_is_avilable`='1' AND `added_gramanildari_id` IS NOT NULL AND `elder_id` =? AND `is_deleted` = 0",
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
      "INSERT INTO `agent`( `elder_id`, `name`, `nic`, `address`, `phone`, `email`,`relation_with_elder`) VALUES (?, ?, ?, ?, ?, ? , ?)",
      [
        data.elder_id,
        data.name,
        data.nic,
        data.address,
        data.phone,
        data.email,
        data.relation_with_elder,
        data.agent_is_avilable,
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
      "UPDATE `agent` SET `agent_is_avilable`='1',`added_gramanildari_id`=?, `gramaniladari_verify_comment`=? WHERE `agent_id`=?",
      [
        data.added_gramanildari_id,
        data.gramaniladari_verify_comment,
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
  updateDisqulifyAgent: (data, callBack) => {
    pool.query(
      "UPDATE `agent` SET `agent_is_avilable`='0', `gramaniladari_verify_comment`=? WHERE `agent_id`=?",
      [
        data.gramaniladari_verify_comment,
        data.agent_id
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
