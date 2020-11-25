const {
  createElders,
  getElderByElderID,
  getElders,
  updateElders,
  deleteElders,
  elderRegistration,
} = require("./elder.service");
const { checkPermision } = require("../../auth/roleauth");
const { createAgent } = require("../agent/agent.services");
const {
  createverifyFirstElder,
} = require("../verify_elder/verify_elder.service");

module.exports = {
  getElderByElderID: (req, res) => {
    const elder_id = req.params.elder_id;
    getElderByElderID(elder_id, (err, results) => {
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

  createElders: (req, res) => {
    const body = req.body;

    createElders(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getElders: (req, res) => {
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
      getElders((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          status: true,
          total: 5,
          last_page: 1,
          per_page: 8,
          current_page: 1,
          next_page_url:
            "https://api.coloredstrategies.com/cakes/fordatatable?sort=&page=2&per_page=8",
          prev_page_url:
            "https://api.coloredstrategies.com/cakes/fordatatable?sort=&page=2&per_page=8",
          from: 1,
          to: 8,
          data: results,
        });
      });
    });
  },
  updateElders: (req, res) => {
    const body = req.body;
    updateElders(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }

      if (!result) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Updated SuccesFully",
        data: result,
      });
    });
  },
  deleteElders: (req, res) => {
    const body = req.body;
    deleteElders(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Databse Connection Error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record Not Found",
        });
      }

      return res.status(500).json({
        success: 1,
        message: "Deleted SuccesFully",
        data: results,
      });
    });
  },
  elderRegistration: (req, res) => {
    const bodyE = req.body.elder;
    createElders(bodyE, (errorE, resultE) => {
      if (errorE) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Databse Connection Error",
        });
      }

      const bodyA = req.body.agent;
      if (bodyA.available) {
        bodyA.elder_id = resultE.insertId;
        createAgent(bodyA, (errorA, resultA) => {
          if (errorA) {
            console.log(error);
            return res.status(500).json({
              success: 0,
              message: "Databse Connection Error",
            });
          }

          const bodyV = req.body.verify;
          bodyV.elder_id = resultE.insertId;
          createverifyFirstElder(bodyV, (errorV, resultV) => {
            if (errorV) {
              console.log(error);
              return res.status(500).json({
                success: 0,
                message: "Databse Connection Error",
              });
            }

            return res.status(200).json({
              success: 1,
              message: " SuccesFully Inserted Elder Agent Verified Elder ",
              data: resultV,
            });
          });
        });
      } else {
        const bodyV = req.body.verify;
        bodyV.elder_id = resultE.insertId;
        createverifyFirstElder(bodyV, (errorV, resultV) => {
          if (errorV) {
            console.log(error);
            return res.status(500).json({
              success: 0,
              message: "Databse Connection Error",
            });
          }

          return res.status(200).json({
            success: 1,
            message: " SuccesFully Inserted Elder an Verified Elder ",
            data: resultV,
          });
        });
      }
    });
  },
};
