const {
  getAgentByAgentID,
  getAgentByElderID,
  getQulifyAgentByElderID,
  getAgent,
  createAgent,
  updateAgent,
  deleteAgent,
  updateDisqulifyAgent,
} = require("./agent.services");

const { sign } = require("jsonwebtoken");

const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  getAgentByAgentID: (req, res) => {
    const elder_id = req.params.elder_id;
    getAgentByAgentID(elder_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAgentByElderID: (req, res) => {
    const elder_id = req.params.elder_id;
    getAgentByElderID(elder_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getQulifyAgentByElderID: (req, res) => {
    const elder_id = req.auth.result.id;
    getQulifyAgentByElderID(elder_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAgent: (req, res) => {
    // console.log(req.auth);

    const rcid = {
      role_id: req.auth.result.role_id,
      cap_id: 1,
    };

    checkPermision(rcid, (err, results) => {
      if (err) {
        console.log(err);
      }

      if (!results) {
        return res.json({
          success: 0,
          error: "Unauthorized access",
        });
      }
      getAgent((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    });
  },
  createAgent: (req, res) => {
    const body = req.body;
    //req.body.elder_id = req.auth.result.id;
    createAgent(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },

  updateCorrectAgent: (req, res) => {
    const eid = req.body.elder_id;
    getAgentByElderID(eid, (err, resultsA) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!resultsA) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      if (resultsA.agent_id != req.body.agent_id) {
        deleteAgent(resultsA, (error, results) => {
          if (error) {
            console.log(error);
            return res.status(500).json({
              success: 0,
              message: "database Connection error",
            });
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found",
            });
          }

          const body = {
            added_gramanildari_id: req.auth.result.id,
            gramaniladari_verify_comment: req.body.gramaniladari_verify_comment,
            agent_id: req.body.agent_id,
          };
          updateAgent(body, (err, results) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                success: 0,
                message: "Database Connection error",
              });
            }

            if (!results) {
              return res.json({
                success: 0,
                message: "Record Not Found",
              });
            }

            return res.status(200).json({
              success: 1,
              message: "Delete and  Updated Succecfully",
              data: results,
            });
          });
        });
      } else {
        const body = {
          added_gramanildari_id: req.auth.result.id,
          gramaniladari_verify_comment: req.body.gramaniladari_verify_comment,
          agent_id: req.body.agent_id,
        };
        updateAgent(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database Connection error",
            });
          }

          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found",
            });
          }

          return res.status(200).json({
            success: 1,
            message: "Updated Succecfully",
            data: results,
          });
        });
      }
    });
  },
  updateDisqulifyAgent: (req, res) => {
    const body = req.body;
    updateDisqulifyAgent(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Updated Succecfully",
        data: results,
      });
    });
  },

  deleteAgent: (req, res) => {
    const body = req.body;
    deleteAgent(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "database Connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Deleted Succecfully",
        data: results,
      });
    });
  },
};
