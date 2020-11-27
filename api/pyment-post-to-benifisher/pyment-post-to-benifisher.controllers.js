const {
  getBenifisherPayemtList,
  getBenifisherPayemtListByDivision,
  getBenifisherPayemtListByPostOffice,
} = require("./pyment-post-to-benifisher.services");
const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  getBenifisherPayemtList: (req, res) => {
    getBenifisherPayemtList((err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succcess: 0,
          message: "Database Connection error",
        });
      }

      return res.status(200).json({
        succcess: 1,
        data: result,
      });
    });
  },
  getBenifisherPayemtListByDivision: (req, res) => {
    const div_id = req.params.div;
    getBenifisherPayemtListByDivision(div_id, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succcess: 0,
          message: "Database Connection error",
        });
      }

      return res.status(200).json({
        succcess: 1,
        data: result,
      });
    });
  },
  getBenifisherPayemtListByPostOffice: (req, res) => {
    const post = req.params.post;
    const month = req.params.month;
    const data = {
      post: post,
      month: month,
    };
    getBenifisherPayemtListByPostOffice(data, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succcess: 0,
          message: "Database Connection error",
        });
      }

      return res.status(200).json({
        succcess: 1,
        data: result,
      });
    });
  },
};
