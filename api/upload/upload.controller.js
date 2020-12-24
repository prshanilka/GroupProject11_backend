

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
        return res.send({name: name, path: `./public/profile/${name}`});
    });
},
  
};
