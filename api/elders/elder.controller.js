const { getElderByElderID } = require("./elder.service");

const { sign } = require("jsonwebtoken");

module.exports = {

  getElderByElderID: (req, res) => {
    const elder_id = req.params.elder_id;
    getElderByElderID(elder_id, (err,results) =>{
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
  }
}