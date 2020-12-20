
require("dotenv").config(); 
module.exports = {
  sendMesssage : (req, callBack) =>{
  
  
    const axios = require('axios');
    urlbn=`https://app.newsletters.lk/smsAPI?sendsms&apikey=bEkSzJ4Y0KsmF82cNWhtCyTlQdaWvwKP&apitoken=e9r71595703720&type=sms&from=IPM CEYLON&route=0&to=${req.pnum}&text=${req.text}`
    axios.get(urlbn)
      .then(response => {
        return callBack(response)
      })
      .catch(error => {
        console.log(error);
      });
  














    

  }
  
}