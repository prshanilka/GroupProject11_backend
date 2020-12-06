const {

  informDeath,
  sendComplain,
  getDeaths,
  getComplains,
  sendPostComplain,
  getPostComplains,
  updateDeath,
  updateComplain

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
  sendPostComplain: (req, res) => {
    const body = req.body;
    sendPostComplain(body, (error, results) => {
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
  },
  getPostComplains: (req, res) => {
    getPostComplains( (err, results) => {
      if(err){
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error ",
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
        data: results,
      });
    });
  },
  updateDeath: (req, res) => {
   
    updateDeath(elder_id, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }

      if (!result) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Updated SuccesFully",
        data: result,
      });
    });
  },
  updateComplain: (req, res) => {
    const body = {
      viewed_officer_id : req.auth.result.id,
      elder_id : req.params.id
    };
    console.log(body);
    updateComplain(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }

      if (!result) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Updated SuccesFully",
        data: result,
      });
    });
  },
};
