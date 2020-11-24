const {
  getDivisionalOfficeByID,
  getDivisionalOffices,
  createDivisionalOffice,
  updateDivisionalOffice,
  deleteDivisionalOffice,
} = require("./divisional-office.services");

const { sign } = require("jsonwebtoken");

const { checkPermision } = require("../../auth/roleauth");
const {
  getverifyElderGramaID,
} = require("../verify_elder/verify_elder.service");
const { selectElderMultipleId } = require("../elders/elder.service");
module.exports = {
  getDivisionalOfficeByID: (req, res) => {
    const div_off_id = req.params.div_off_id;
    getDivisionalOfficeByID(div_off_id, (err, results) => {
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
  getDivisionalOffices: (req, res) => {
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
      getDivisionalOffices((err, results) => {
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
  createDivisionalOffice: (req, res) => {
    const body = req.body;
    createDivisionalOffice(body, (err, result) => {
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
  updateDivisionalOffice: (req, res) => {
    const body = req.body;
    updateDivisionalOffice(body, (err, results) => {
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
  deleteDivisionalOffice: (req, res) => {
    const body = req.body;
    deleteDivisionalOffice(body, (error, results) => {
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

  getToBeVerifyList: (req, res) => {
    const body = req.body;

    getverifyElderGramaID(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database Connection error",
        });
      }
      console.log(results);
      whereIn = "(";
      for (var i in results) {
        if (i != results.length - 1) {
          whereIn += "'" + results[i].elder_id + "',";
        } else {
          whereIn += "'" + results[i].elder_id + "'";
        }
      }
      whereIn += ")";

      console.log(whereIn);
      selectElderMultipleId(whereIn, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "database Connection error",
          });
        }

        return res.json({
          success: 1,
          data: results,
        });
      });
    });
  },
};
