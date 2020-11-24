const {
  createOfficer,
  getOfficers,
  getOfficerByOfficerID,
  updateOfficer,
  deleteOfficer,
} = require("./officer_service");

const { create } = require("../officers/officer.service");

const { sign } = require("jsonwebtoken");

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
 
    },
    createGramaOfficer: (req, res) => {
      const bodyo = req.body.Officer;

      create(bodyo, (erro,resultso) => {
        if(erro){
          console.log(erro);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
          });
        }
        const bodyg = req.body.GramaOfficer;
        createOfficer(bodyg, (errg, resultsg) => {
          if(errg){
            console.log(errg);
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
};
