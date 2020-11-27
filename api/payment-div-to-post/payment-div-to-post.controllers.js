const { InsertPaymetDivToPost } = require("./payment-div-to-post.services");
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
};
