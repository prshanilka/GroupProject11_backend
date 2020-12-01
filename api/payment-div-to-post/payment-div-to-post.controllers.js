const {
  InsertPaymetDivToPost,
  GetPyamentToPostOff,
  GetPyamentHistory
} = require("./payment-div-to-post.services");
const { checkPermision } = require("../../auth/roleauth");
const {
  InsertPaymetPostToBenifisher,
} = require("../pyment-post-to-benifisher/pyment-post-to-benifisher.services");

module.exports = {
  InsertPaymetDivToPost: (req, res) => {
    const body = req.body;
    InsertPaymetDivToPost(body, (errd, resultd) => {
      if (errd) {
        console.log(errd);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      body.divisional_payment_id = resultd.insertId;
      InsertPaymetPostToBenifisher(body, (errp, resultp) => {
        if (errp) {
          console.log(errp);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: resultp,
        });
      });
    });
  },
  GetPyamentToPostOff: (req, res) => {
    const data = {};
    GetPyamentToPostOff(data, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succcess: 0,
          message: "Database Connection error",
        });
      }

      return res.status(200).json({
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
        data: result,
      });
    });
  },
  GetPyamentHistory: (req, res) => {
    
    GetPyamentHistory( (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succcess: 0,
          message: "Database Connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
};
