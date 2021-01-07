const {
  getBenifisherPayemtList,
  getBenifisherPayemtListByDivision,
  getBenifisherPayemtListByPostOffice,
  payToElder,
  payToAgent,
  getElderHistory,
  updateElderReason,
  getAllPayReport,
  getCountGotMoney,
  getBenifisherPayemtListByPayId,
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
    const data = {
      div_id: req.params.div,
      month: req.params.month,
      year: req.params.year,
    };
    getBenifisherPayemtListByDivision(data, (err, result) => {
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
  getBenifisherPayemtListByPostOffice: (req, res) => {
    const post = req.params.post;
    const month = req.params.month;
    const data = {
      post: post,
      month: month,
      year: req.params.year,
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

  getBenifisherPayemtListByPayId: (req, res) => {
    const data = {
      pay_id: req.params.pay_id,
    };
    getBenifisherPayemtListByPayId(data, (err, result) => {
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

  getAllPayReport: (req, res) => {
    const div_id = req.params.div_id;

    getAllPayReport(div_id, (err, result) => {
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
  payToElder: (req, res) => {
    const body = req.body;
    console.log(body);

    payToElder(body, (err, result) => {
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
        message: "Updated Elder Payment SuccesFully",
        data: result,
      });
    });
  },

  payToAgent: (req, res) => {
    const body = req.body;
    console.log(body);

    payToAgent(body, (err, result) => {
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
        message: "Updated Elder-agent Payment SuccesFully",
        data: result,
      });
    });
  },
  getElderHistory: (req, res) => {
    // console.log(eld_id);
    const eld_id = req.auth.result.id;
    console.log(req.auth.result.id);
    getElderHistory(eld_id, (err, result) => {
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
  updateElderReason: (req, res) => {
    const body = req.body;
    updateElderReason(body, (err, result) => {
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
        message: "Updated Elder reason SuccesFully",
        data: result,
      });
    });
  },
  getCountGotMoney: (req, res) => {
    const d_id = req.params.id;
    getCountGotMoney(d_id, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
};
