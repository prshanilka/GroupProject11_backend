const {
  getOfficerByOfficerID,
  getOfficers,
  createOfficers,
  updateOfficers,
  deleteOfficers,
  getOfficersFromVID,
} = require("./divisional_officer.service");

const { create } = require("../officers/officer.service");

const { createOffUser } = require("../users/user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  createOfficers: (req, res) => {
    const bodyUser = req.body.User;
    console.log(bodyUser.uname);
    const salt = genSaltSync(10);
    bodyUser.pword = hashSync(bodyUser.pword, salt);
    createOffUser(bodyUser, (err, resultsUser) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      const bodyDiv = req.body.DivOfficer;
      createOfficers(bodyDiv, (errDiv, resultsDiv) => {
        if (errDiv) {
          console.log(errDiv);
          return res.status(500).json({
            success: 0,
            message: "Database Connection Error",
          });
        }
        const bodyO = req.body.Officer;
        create(bodyO, (errO, resultsO) => {
          if (errO) {
            console.log(errO);
            return res.status(500).json({
              success: 0,
              message: "Database Connection Error",
            });
          }
          return res.status(200).json({
            success: 1,
            data: resultsO,
          });
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
  updateOfficers: (req, res) => {
    const body = req.body;
    updateOfficers(body, (err, results) => {
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
        message: "Officer deleted successfully",
      });
    });
  },
  getOfficersFromVID: (req, res) => {
  const vid = req.params.vid;
    getOfficersFromVID(vid, (err, results) => {
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
};
