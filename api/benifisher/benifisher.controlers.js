const {
  getBenifisherByBenifisherID,
  getBenifisher,
  createBenifisher,
  updateBenifisher,
  deleteBenifisher,
} = require("./benifisher.services");

const { sign } = require("jsonwebtoken");

const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  getBenifisherByBenifisherID: (req, res) => {
    const benifisher_id = req.params.benifisher_id;
    getBenifisherByBenifisherID(benifisher_id, (err, results) => {
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
  getBenifisher: (req, res) => {
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
      getBenifisher((err, results) => {
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
  createBenifisher: (req, res) => {
    const body = req.body;
    createBenifisher(body, (err, result) => {
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
  updateBenifisher: (req, res) => {
    const body = req.body;
    updateBenifisher(body, (err, results) => {
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
  deleteBenifisher: (req, res) => {
    const body = req.body;
    deleteBenifisher(body, (error, results) => {
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
