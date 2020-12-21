const { createNotification,getNotification } = require("./notification.service");


module.exports = {
    createNotification: (req, res) => {
    const body =req.body;
    createNotification(body , (err ,results) => {
      if(err){
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
    },
    getNotification: (req, res) => {
        const id = req.auth.result.user_id;
        // console.log( id);
        getNotification( id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });     
    }
}