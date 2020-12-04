const {
  getCriteria,
} = require("./marks.service");
const { checkPermision } = require("../../auth/roleauth");

module.exports = {

  getCriteria: (req, res) => {
    getCriteria((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        status:true,
        data: results,
      });
    });

  },
};
