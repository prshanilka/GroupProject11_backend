const {
  createOfficer,
  getOfficers,
  getOfficerByOfficerID,
  updateOfficer,
  deleteOfficer,
  GetGramaOfficerByOfficers,
  GetGramaDetails,
  getOfficerGramaIdByOfficerID
} = require("./officer_service");

const { createOffUser } = require("../users/user.service");

const { create, updateOfficers } = require("../officers/officer.service");

const { sign } = require("jsonwebtoken");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  createOfficer: (req, res) => {
    const body = req.body;
    createOfficer(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      console.log("pathu");
      return res.json({
        success: 1,
        data: resultsg,
      });
    });
  },
  createGramaOfficer: (req, res) => {
    const bodyUser = req.body.User;
    console.log(bodyUser.uname);
    const salt = genSaltSync(10);
    bodyUser.pword = hashSync(bodyUser.pword, salt);
    createOffUser(bodyUser, (err, resultsUser) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      const bodyo = req.body.Officer;
      create(bodyo, (erro, resultso) => {
        if (erro) {
          console.log(erro);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
          });
        }
        const bodyg = req.body.GramaOfficer;
        createOfficer(bodyg, (errg, resultsg) => {
          if (errg) {
            console.log(errg);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror",
            });
          }
          return res.json({
            success: 1,
            data: resultsg,
          });
        });
      });
    });
  },
  updateGramaOfficer: (req, res) => {
    const bodyo = req.body.Officer;

    updateOfficers(bodyo, (erro, resultso) => {
      if (erro) {
        console.log(erro);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      const bodyg = req.body.GramaOfficer;
      updateOfficer(bodyg, (errg, resultsg) => {
        if (errg) {
          console.log(errg);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
          });
        }
        console.log("sasa");
        return res.json({
          success: 1,
          message: "I know",
          data: resultsg,
        });
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
    const Officer_id = req.params.grmaniladari_officer_id;
    getOfficerByOfficerID(Officer_id, (err, results) => {
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
  updateOfficer: (req, res) => {
    const body = req.body;
    updateOfficer(body, (err, results) => {
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
  deleteOfficer: (req, res) => {
    const data = req.body;
    deleteOfficer(data, (err, results) => {
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

  GetGramaOfficerByOfficers: (req, res) => {
    const data = {};
    GetGramaOfficerByOfficers(data, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succcess: 0,
          message: "Database Connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },

  GetGramaDetails: (req, res) => {
    const division_id = req.params.gramaniladari_division_id;
    GetGramaDetails(division_id, (err, results) => {
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
  getDiviSionByOfficerID: (req, res) => {
    const o_id = req.auth.result.id;
    getOfficerGramaIdByOfficerID(o_id, (err, resultD) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succcess: 0,
          message: "Database Connection error",
        });
      }
      if (!resultD) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      if(resultD){
        const d_id = resultD.gramaniladari_division_id;
        GetGramaDetails(d_id, (err, results) => {
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
      }
    });
  }
};
