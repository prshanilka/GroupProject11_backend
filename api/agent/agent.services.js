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
    console.log("ageny all");

    pool.query(`SELECT * FROM agent`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
