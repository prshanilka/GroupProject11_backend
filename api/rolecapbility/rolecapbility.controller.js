const { rolecapabilityRIDCID } = require("./rolecapbility.service");

module.exports = {

  rolecapabilityRIDCID: (req, res) => {
    rolecapabilityRIDCID(req, (err,results) =>{
      if (err){
        console.log(err);
        return ;
      }
      if(results.num==1){
          return  true;
      }
      else{
        return false;
      }

    });
  }
}