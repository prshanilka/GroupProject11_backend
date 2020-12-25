const {
  create,
  getUsers,
  getUserByUserId,
  updateUser,
  deleteUser,
  getUserByUserName,
  checkUsername,
  changePass
  
} = require("./user.service");
const { tokenLogin } = require("../token/token.controller");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { checkPermision } = require("../../auth/roleauth");
const getIP = require("ipware")().get_ip;

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    console.log(body.user_name);
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  createElder: (req, res) => {
    const body = req.body;
    console.log(body.user_name);
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body,10,10,(err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    const rcid = {
      role_id: req.auth.result.role_id,
      cap_id: 1,
    };

    checkPermision(rcid, (err, results) => {
      if (err) {
        console.log(err);
      }

      if (!results) {
        return res.json({
          success: 0,
          error: "Unauthorized access",
        });
      }
      getUsers((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    });
  },

  getUserByUserId: (req, res) => {
    const user_id = req.params.user_id;
    getUserByUserId(user_id, (err, results) => {
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
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByUserName(body.username, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Invalid email or password",
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        // console.log('dddd');
        // console.log(results);

        results.password = undefined;
        const salt = process.env.JSONSALTA
        const rsalt = process.env.JSONRSALTA
        //getIP(req).clientIp
        const jsontoken = sign({ result: results }, salt, {
          expiresIn: "12h",
        });

        const refreshtoken = sign({ uid: results.user_id }, rsalt, {
          expiresIn: "2d",
        });

        tokenLogin({ id: results.user_id, token: refreshtoken }, (err) => {
          if (err) {
            console.log(err);
          }
        });

        console.log(results);
        const userData = {
          id: results.user_id,
          title: results.user_name,
          img: results.profile,
          date: "Last seen today 15:24",
          role: results.role_id,
        };

        return res.json({
          success: 1,
          message: "Login Succesfully",
          token: jsontoken,
          refresh: refreshtoken,
          data: userData,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },
  refresh: (req, res) => {
    /*
    return res.json({
      success:0,
      message: req.auth

    });


    */
    //getIP(req).clientIp;

    const auth = req.auth;
    getUserByUserId(auth.uid, (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
      }
      if (!results) {
        res.status(401).json({
          success: 0,
          logout: 1,
          message: "Expired Refresh Token",
        });
      }
      console.log(results);
      results.password = undefined;
      const salt = process.env.JSONSALTA + getIP(req).clientIp;
      const jsontoken = sign({ result: results }, salt, {
        expiresIn: "12h",
      });
      console.log(results);

      return res.json({
        success: 1,
        message: "token refresh",
        token: jsontoken,
      });
    });
  },
  checkUsername: (req, res) => {
    const body = req.body;
    checkUsername(body.user_name,(err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      
      if(!results.length == 0){
        return res.status(200).json({
          success: 1,
          data: false,
        });
      }
      return res.status(200).json({
        success: 1,
        data: true,
      });
      
    });
  },
  changePass: (req, res) => {
    const body = req.body;
;
    //body.password = hashSync(body.cpassword, salt);
    //const result = compareSync(body.password, results.password);
        console.log(req.auth.result.user_name)
        getUserByUserName(req.auth.result.user_name, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Error",
            });
          }
          const result = compareSync(body.password, results.password);
          if(result){
            const salt = genSaltSync(10);
            pass = hashSync(body.cpassword, salt)
            changePass(pass,req.auth.result.user_id, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
        
              return res.json({
                success: 1,
                message: "Password changed successfully",
              });
            });
            
          }
          else{
              return res.json({
                success: 0,
                message: "Wrong Current Password",
              });
          }
        })













  },

};
