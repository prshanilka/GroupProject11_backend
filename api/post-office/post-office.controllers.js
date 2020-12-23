const {
  getPostOfficeByPostOfficeID,
  getPostOffices,
  createPostOffice,
  updatePostOffice,
  deletePostOffice,
  getPostOfficesToSelectBox,
  getPostOfficeBenifisherList,
  getpostOfficePayHistory,
  endPostPaymentToDivPayId,
  getPaymentInfo,
  getPostOfficeBenifisherphoneList
} = require("./post-office.sevices");

const {
  getOfficerPostOfficeByOfficerID,
} = require("../post_office_Officers/post_officer.service");
const { sign } = require("jsonwebtoken");

const { sendMesssage } = require("../../auth/notification");

const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  getPostOfficeByPostOfficeID: (req, res) => {
    const post_office_id = req.params.post_office_id;
    getPostOfficeByPostOfficeID(post_office_id, (err, results) => {
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
  getPaymentInfo: (req, res) => {
    const post_office_id = req.params.post_office_id;
    getPaymentInfo(post_office_id, (err, results) => {
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
  getpostOfficePayHistory: (req, res) => {
    // console.log(req.auth.result.id);
    const off_id = req.auth.result.id;
    getOfficerPostOfficeByOfficerID(off_id, (errO, resultsO) => {
      if (errO) {
        console.log(errO);
        return;
      }
      if (!resultsO) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      const post_office_id = resultsO.post_office_id;
      getpostOfficePayHistory(post_office_id, (err, results) => {
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
    });
  },
  sendNotifySms : (req, res) => {
    const off_id = req.auth.result.id;
    getOfficerPostOfficeByOfficerID(off_id, (errO, resultsO) => {
      if (errO) {
        console.log(errO);
        return;
      }
      if (!resultsO) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      const post_office_id = resultsO.post_office_id;
      const message = req.body.message;
      getPostOfficeBenifisherphoneList(post_office_id ,message, (err, results) => {
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

         
        results.forEach(res => {
          res.number = "+94" +res.number.substring(1);
          // console.log(res);

        const reqM = {
          pnum: res.number,
          text: res.massage
        }

          sendMesssage(reqM, (resM) => {
          // console.log(resM.status);
        });
        });
        return res.json({
          success: 1,
             data: results,
        });
       
      });
    });
  },


  getPostOfficeBenifisherList: (req, res) => {
    const off_id = req.auth.result.id;
    getOfficerPostOfficeByOfficerID(off_id, (errO, resultsO) => {
      if (errO) {
        console.log(errO);
        return;
      }
      if (!resultsO) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      const post_office_id = resultsO.post_office_id;

      getPostOfficeBenifisherList(post_office_id, (err, results) => {
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
    });
  },
  getPostOffices: (req, res) => {
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
      getPostOffices((err, results) => {
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
  createPostOffice: (req, res) => {
    const body = req.body;
    createPostOffice(body, (err, result) => {
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
  endPostPaymentToDivPayId: (req, res) => {
    const body = req.body;
    console.log(body);
    console.log("sasa");

    endPostPaymentToDivPayId(body, (err, results) => {
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
        message: "Updated post to Div Succesfully",
        data: results,
      });
    });
  },
  updatePostOffice: (req, res) => {
    const body = req.body;
    updatePostOffice(body, (err, results) => {
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
  deletePostOffice: (req, res) => {
    const body = req.body;
    deletePostOffice(body, (error, results) => {
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
  getPostOfficesToSelectBox: (req, res) => {
    getPostOfficesToSelectBox((err, results) => {
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
