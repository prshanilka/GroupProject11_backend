const {
  getDivisionalOfficeByID,
  getDivisionalOffices,
  createDivisionalOffice,
  updateDivisionalOffice,
  deleteDivisionalOffice,
  getApplicationToVerifyByDivision,
  getDivisionsToSelectBox,
  getBenifisherListTodiv,
  getConstant,
  updateConstant,
  officeDetails
} = require("./divisional-office.services");

const {
  getOfficerByOfficerID
} = require("../divisional_secratary_officer/divisional_officer.service");

const { sign } = require("jsonwebtoken");

const { checkPermision } = require("../../auth/roleauth");

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
  getBenifisherListTodiv: (req, res) => {
    const off_id = req.params.off_id;
    // console.log(off_id);

    getBenifisherListTodiv(off_id, (err, results) => {
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

  getApplicationToVerifyByDivision: (req, res) => {
    const div_off_id = req.params.div_off_id;
    getApplicationToVerifyByDivision(div_off_id, (err, results) => {
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
        message: "nonno",
        data: results,
      });
    });
  },
  getDivisionsToSelectBox: (req, res) => {
    getDivisionsToSelectBox((err, results) => {
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
  getConstant: (req,res) => {
    getConstant((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  updateConstant: (req, res) => {
    const body = req.body;
    updateConstant(body, (err, results) => {
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
  officeDetails: (req,res) => {
    const officer_id = req.auth.result.id;
    getOfficerByOfficerID(officer_id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      if(result){
        const office_id = result.divisional_secratary_id;
        officeDetails(office_id, (err, resultO) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: resultO,
          });
        });
      }
    });
  },
};
