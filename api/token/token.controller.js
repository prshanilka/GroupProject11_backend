const { 
  tokenI,
  tokenD,
  tokenS

} = require("./token.service");
module.exports = {

  tokenD: (req, res) => { 
    console.log(req.auth.result.user_id)
    tokenD(req.auth.result.user_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (results.affectedRows == 0) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });
  },
  tokenRefresh: (req, callBack) => {
    tokenS(req, (err,results) =>{
      if (err){
        console.log(err);
        return ;
      }
      //console.log(results.num);
      //return callBack(50);

      if(results.num = 0){
          return callBack(true)
      }
      return callBack(null, true)
    });
 
  },
  tokenLogin: (req, res) => {

   // console.log("token controller");
   // console.log(req);

    tokenD(req.id, (err, results) => {
        if (err) {
          console.log(err);
        }
    });
    tokenI(req, (err, results) => {
      if (err) {
        console.log(err);
        return  "Database connection errror";

      }
      /*
      return res.json({
        success: 1,
        data: results
      });*/
    });
  },
}