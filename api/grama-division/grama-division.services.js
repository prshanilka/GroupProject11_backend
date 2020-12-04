const pool = require("../../config/database");
module.exports = {
  getGramaDivisionByGramaDivisionID: (elder_id, callBack) => {
    pool.query(
      "SELECT * FROM `gramaniladari_division` WHERE `gramaniladari_division_id` = ?",
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getBenifisherListToGram: (grama_div, callBack) => {
    pool.query(
      "SELECT * FROM `elder`,`benifesher` WHERE elder.elder_id = benifesher.elder_id AND benifesher.is_deleted =0 and elder.gramaniladari_division_id =?",
      [grama_div],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  createGramaDivision: (data, callBack) => {
    pool.query(
      "INSERT INTO `gramaniladari_division` (`gramaniladari_division_id`, `district_id`, `divisional_secratory_id`, `name`, `address`, `number`, `email` , `count_of_benifishers` ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )",
      [
        data.gramaniladari_division_id,
        data.district_id,
        data.divisional_secratory_id,
        data.name,
        data.address,
        data.number,
        data.email,
        data.count_of_benifishers,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },
  getGramaDivisions: (callBack) => {
    pool.query(
      "SELECT * FROM `gramaniladari_division` WHERE `is_deleted` = 0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getGramaDivisionsIDonly: (callBack) => {
    pool.query(
      "SELECT gramaniladari_division_id FROM `gramaniladari_division` WHERE `is_deleted` = 0",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        data=[];
        results.forEach(element => {
          data.push(element.gramaniladari_division_id)
          
        });
        //console.log(data)
        return callBack(null, data);
      }
    );
  },
  updateGramaDivision: (data, callBack) => {
    pool.query(
      "UPDATE `gramaniladari_division` SET `district_id`=?,`divisional_secratory_id`=?,`name`=?,`address`=?,`number`=?,`email`= ? ,`count_of_benifishers`=? WHERE `gramaniladari_division_id`=?",
      [
        data.district_id,
        data.divisional_secratory_id,
        data.name,
        data.address,
        data.number,
        data.email,
        data.count_of_benifishers,
        data.gramaniladari_division_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteGramaDivision: (data, callBack) => {
    pool.query(
      "UPDATE `gramaniladari_division` SET  `is_deleted` ='1'   WHERE `gramaniladari_division_id`=?",
      [data.gramaniladari_division_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getGramaDivisionsToSelectBox: (callBack) => {
    pool.query(
      "SELECT `gramaniladari_division_id` as value, `name` as text FROM `gramaniladari_division` WHERE `is_deleted`='0'",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
