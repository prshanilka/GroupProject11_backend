const {
  create,
  getOfficerByOfficerID,
  getOfficers,
   updatePPPPOfficers,
  deleteOfficers,
  getPostOfficers,
  byIdGetPostOfficers,

} = require("./post_officer.service");

const { sign } = require("jsonwebtoken");

const { checkPermision } = require("../../auth/roleauth");
const { createOffOfficer,updateOfficers } = require("../officers/officer.service");
module.exports = {
  createOfficer: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getPostOfficers: (req, res) => {
    getPostOfficers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  byIdGetPostOfficers: (req, res) => {
    const officer_id = req.params.officer_id;
    byIdGetPostOfficers(officer_id, (err, results) => {
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
  getOfficers: (req, res) => {
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
      getOfficers((err, results) => {
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
  getOfficerByOfficerID: (req, res) => {
    const officer_id = req.params.officer_id;
    getOfficerByOfficerID(officer_id, (err, results) => {
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
   updatePPPPOfficers: (req, res) => {
    const body = req.body;
     updatePPPPOfficers(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteOfficers: (req, res) => {
    const data = req.body;
   
    deleteOfficers(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "officer deleted successfully",
      });
    });
  },
  addPostOfficer: (req, res) => {
    const dataO = req.body.officer;
    createOffOfficer(dataO, (errO, resultO) => {
      if (errO) {
        console.log(errO);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      const dataP = req.body.postofficer;
      create(dataP, (errP, resultsP) => {
        if (errP) {
          console.log(errP);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
          });
        }
        return res.status(200).json({
          success: 1,
          data: resultsP,
        });
      });
    });
  },
  updatePostOfficer: (req, res) => {
    const dataO = req.body.officer;
    updateOfficers(dataO, (errO, resultO) => {
      if (errO) {
        console.log(errO);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      const dataP = req.body.postofficer;
      updatePPPPOfficers(dataP, (errP, resultsP) => {
        if (errP) {
          console.log(errP);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
          });
        }
        return res.status(200).json({
          success: 1,
          data: resultsP,
        });
      });
    });
  },
};
