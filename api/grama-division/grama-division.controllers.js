const {
  getGramaDivisionByGramaDivisionID,
} = require("./grama-division.services");

const { sign } = require("jsonwebtoken");

module.exports = {
  getGramaDivisionByGramaDivisionID: (req, res) => {
    const elder_id = req.params.elder_id;
    getGramaDivisionByGramaDivisionID(elder_id, (err, results) => {
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
