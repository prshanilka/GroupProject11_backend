const {
    getpropicname
} = require('./upload.service');

module.exports = {
  propic: (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
        const name = req.auth.result.user_name + req.auth.result.user_id +myFile.name.substring(myFile.name.length - 4); ;

    myFile.mv(`./public/profile/${name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: name, path: `/uploads/profile/${name}`});
    });
    },
    
    gardianpic: (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
        const name = req.auth.result.user_name + req.auth.result.user_id +myFile.name.substring(myFile.name.length - 4); ;

    myFile.mv(`./public/guardian/${name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: name, path: `/uploads/guardian/${name}`});
    });
    },
    
  
    getpropicname: (req, res) => {
            const body = req.body;
     getpropicname(body, (error, results) => {
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
 

}
};
