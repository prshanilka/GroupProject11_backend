const { getOfficerByOfficerID, getOfficers } = require("./officer.service");

const { sign } = require("jsonwebtoken");

module.exports = {
  
  getOfficerByOfficerID: (req, res) => {
    const officer_id = req.params.officer_id;
    getOfficerByOfficerID(officer_id, (err,results) =>{
      if (err){
        console.log(err);
        return ;
      }
      if(!results){
          return res.json({
            success:0,
            message:"Record not found"
          });
      }
      return res.json({
        success:1,
        data:results

      });
    });
  },
  getOfficers: (req, res) => {
      getOfficers()
  }
}