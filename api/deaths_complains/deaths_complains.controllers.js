const {

  informDeath,
  sendComplain,
  getDeaths,
  getComplains

} = require("./deaths_complains.services");

const { checkPermision } = require("../../auth/roleauth");

module.exports = {
  
  informDeath: (req, res) => {
    const body = req.body;
    informDeath(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  sendComplain: (req, res) => {
    const body = req.body;
    sendComplain(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getDeaths: (req, res) => {
    getDeaths( (err, results) => {
      if(err){
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getComplains: (req, res) => {
    getComplains( (err, results) => {
      if(err){
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  }
};
