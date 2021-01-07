const {
  getCriteria,
  insertCriteria,
  deleteCriteria,
  getMarksByvID
} = require("./marks.service");
const { checkPermision } = require("../../auth/roleauth");

module.exports = {

  getCriteria: (req, res) => {
    getCriteria((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        status:true,
        data: results,
      });
    });

  },
  insertCriteria: (req, res) => {
    const body = req.body;
    insertCriteria(body, (err, result) => {
      if(err){
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  deleteCriteria: (req, res) => {
    const cid = req.params.cri_id;
    deleteCriteria(cid, (error, results) => {
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
  getMarksByvID: (req, res) => {
    const vid = req.params.vid;
    getMarksByvID(vid,(err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        status:true,
        data: results,
      });
    });

  },
};
