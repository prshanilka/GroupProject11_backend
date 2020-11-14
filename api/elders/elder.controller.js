const { getElderByElderID, getElders } = require("./elder.service");
const { checkPermision } = require("../../auth/roleauth")
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
  },
  getElders: (req, res) => {
    const rcid = {
      role_id : req.auth.result.role_id,
      cap_id  : 1
    };

    checkPermision(rcid, (err, results) => {
      if (err) {
        console.log(err);
      }

      if(!results){
        return res.json({
          success: 0,
          error: "Unauthorized access",
        });
      }
      getElders((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            status: true,
            total: 5,
            last_page: 1,
            per_page: 8,
            current_page: 1,
            next_page_url: "https://api.coloredstrategies.com/cakes/fordatatable?sort=&page=2&per_page=8",
            prev_page_url: "https://api.coloredstrategies.com/cakes/fordatatable?sort=&page=2&per_page=8",
            from: 1,
            to: 8,
            data:results
          });
        });


      
    });




  },
}