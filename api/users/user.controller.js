const {
  create,
  getUsers,
  getUserByUserId,
  updateUser,
  deleteUser,
  getUserByUserName
} = require("./user.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { checkPermision } = require("../../auth/roleauth")
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
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
     getUsers: (req, res) => {
      const rcid = {
        role_id:req.auth.result.role_id,
        cap_id:1
      };

      checkPermision(rcid, (err, results) => {
        if (err) {
          console.log(err);
        }

        if(!results){
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
              data: results
            
            });
          });


        
      });




  },
  getUserByUserId: (req, res) => {
    const user_id = req.params.user_id;
    getUserByUserId(user_id, (err,results) =>{
      if (err){
        console.log(err);
        return ;
      }
      if(!results){
          return res.json({
            success:0,
            message:"Record not found"
          });
      }
      return res.json({
        success:1,
        data:results,
   

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
        message: "updated successfully"
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
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });
  },
  login: (req, res) =>{
    const body = req.body;
    getUserByUserName(body.username, (err, results)=>{
      console.log(results);
      if(err){
        console.log(err);
      }
      if(!results){
        return res.json({
          success:0,
          message:"Invalid email or password"

        });
      }
      const result = compareSync(body.password,results.password);
      if(result){
        results.password = undefined;
        const salt =process.env.JSONSALTA;
        const jsontoken = sign({ result: results },salt,{
          expiresIn: "12h"
        });
      console.log(results);
        const userData = {
          id: results.user_id,
          title: results.user_name,
          img: '/assets/img/profiles/l-1.jpg',
          date: 'Last seen today 15:24',
          role: results.role_id
        };

        return res.json({
          
          success:1,
          message:"Login Succesfully",
          token: jsontoken,
          data:userData
        });

      }
      else{
        return res.json({
          success:0,
          data:"Invalid email or password"
        });
      }
    });

  },








  
}