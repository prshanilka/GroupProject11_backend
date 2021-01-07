const {
  getGramaDivisionByGramaDivisionID,
  createGramaDivision,
  getGramaDivisions,
  updateGramaDivision,
  deleteGramaDivision,

  getGramaDivisionsToSelectOfficers,
  getGramaDivisionsToSelectBox,
  getBenifisherListToGram,
  getBenifisherCountToGram,
  getGramaDivisionsIDonly,
  getAgentVerifyList,
} = require("./grama-division.services");

const {
  getOfficerGramaIdByOfficerID,
} = require("../grama_niladari_officer/officer_service");
const { checkPermision } = require("../../auth/roleauth");
const {
  getverifyElderGramaID,
  getverifiedElderGramaID,
} = require("../verify_elder/verify_elder.service");

const { getNotAvilableAgentByElderID } = require("../agent/agent.services");
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
    const grmaniladari_officer_id = req.auth.result.id;
    getOfficerGramaIdByOfficerID(grmaniladari_officer_id, (errO, resultsO) => {
      if (errO) {
        console.log(errO);
        return res.status(500).json({
          success: 0,
          message: "database Connection error",
        });
      }

      if (!resultsO) {
        return res.json({
          success: 0,
          message: "record Not Found",
        });
      }

      const gram_div_id = resultsO.gramaniladari_division_id;
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
  getBenifisherCountToGram: (req, res) => {
    const grmaniladari_officer_id = req.auth.result.id;
    getOfficerGramaIdByOfficerID(grmaniladari_officer_id, (errO, resultsO) => {
      if (errO) {
        console.log(errO);
        return res.status(500).json({
          success: 0,
          message: "database Connection error",
        });
      }

      if (!resultsO) {
        return res.json({
          success: 0,
          message: "record Not Found",
        });
      }

      const gram_div_id = resultsO.gramaniladari_division_id;
      getBenifisherCountToGram(gram_div_id, (err, results) => {
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
  getToBeVerifyList: (req, res) => {
    const gram_div_id = req.auth.result.id;
    console.log(req.auth);
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
  getGramaDivisionsToSelectOfficers: (req, res) => {
    getGramaDivisionsToSelectOfficers((err, results) => {
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
  getGramaDivisionsIDonly: (req, res) => {
    getGramaDivisionsIDonly((err, results) => {
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
  },
  getAgentVerifyList: (req, res) => {
    const officer_id = req.auth.result.id;
    console.log(req.auth);
    getAgentVerifyList(officer_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database Connection error",
        });
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
  },
};
