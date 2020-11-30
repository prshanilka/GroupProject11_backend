const {
  getGramaDivisionByGramaDivisionID,
  createGramaDivision,
  getGramaDivisions,
  updateGramaDivision,
  deleteGramaDivision,
  getGramaDivisionsToSelectBox,
  getBenifisherListToGram,
} = require("./grama-division.services");

const { checkPermision } = require("../../auth/roleauth");
const {
  getverifyElderGramaID,
} = require("../verify_elder/verify_elder.service");
const { selectElderMultipleId } = require("../elders/elder.service");

module.exports = {
  getGramaDivisionByGramaDivisionID: (req, res) => {
    const elder_id = req.params.gram_div_id;
    getGramaDivisionByGramaDivisionID(elder_id, (err, results) => {
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
  createGramaDivision: (req, res) => {
    const body = req.body;
    createGramaDivision(body, (error, results) => {
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
  getGramaDivisions: (req, res) => {
    const rcid = {
      role_id: req.auth.result.role_id,
      cap_id: 1,
    };

    checkPermision(rcid, (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          success: 0,
          error: "errorr in errore",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          error: "Unauthorized acces",
        });
      }

      getGramaDivisions((err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database Connection Errorr",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    });
  },
  updateGramaDivision: (req, res) => {
    const body = req.body;
    updateGramaDivision(body, (err, result) => {
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
  deleteGramaDivision: (req, res) => {
    const body = req.body;
    deleteGramaDivision(body, (error, results) => {
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
  getBenifisherListToGram: (req, res) => {
    const gram_div_id = req.params.gram_div_id;
    getBenifisherListToGram(gram_div_id, (err, results) => {
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
  },
  getToBeVerifyList: (req, res) => {
    const gram_div_id = req.params.gram_div_id;
    getverifyElderGramaID(gram_div_id, (err, results) => {
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
  },
  getGramaDivisionsToSelectBox: (req, res) => {
    getGramaDivisionsToSelectBox((err, results) => {
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
