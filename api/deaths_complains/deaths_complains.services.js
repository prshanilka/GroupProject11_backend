const pool = require("../../config/database");
module.exports = {
  
  informDeath: (data,callBack) => {
    pool.query(
      "INSERT INTO inform_death(elder_id,gramaniladari_division_id,divisional_secratory_id,death_certificate_no,death_reason, death_date) VALUES (?,?,?,?,?,?)",
      [
        data.elder_id,
        data.gramaniladari_division_id,
        data.divisional_secratory_id,
        data.death_certificate_no,
        data.death_reason,
        data.death_date
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  sendComplain: (data,callBack) => {
    pool.query(
      "INSERT INTO complains(elder_id,gramaniladari_division_id,post_office_id,viewed_officer_id,complain) VALUES (?,?,'null','null',?)",
      [
        data.elder_id,
        data.gramaniladari_division_id,
        data.complain,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDeaths: (callBack) => {
    pool.query(
      "SELECT elder.name AS ename,gramaniladari_division.name AS gname,inform_death.death_certificate_no,inform_death.death_reason,inform_death.death_date FROM inform_death,gramaniladari_division,elder WHERE inform_death.elder_id = elder.elder_id AND gramaniladari_division.gramaniladari_division_id = inform_death.gramaniladari_division_id AND inform_death.is_view_officer = '0' AND inform_death.is_deleted = '0'",
      [],
      (error, results, fields) => {
        if(error){
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getComplains: (callBack) => {
    pool.query(
      "SELECT elder.name AS ename,gramaniladari_division.name AS gname,complains.complain FROM complains,gramaniladari_division,elder WHERE complains.elder_id = elder.elder_id AND complains.gramaniladari_division_id = gramaniladari_division.gramaniladari_division_id AND complains.is_viewed = '0' AND complains.is_deleted = '0'",
      [],
      (error, results, fields) => {
        if(error){
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
