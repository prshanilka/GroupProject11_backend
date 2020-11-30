const pool = require("../../config/database");

module.exports = {
  getApplicationStatus: (elder_id, callBack) => {
    console.log(elder_id );
    pool.query(
      `SELECT * FROM verification_of_elders WHERE elder_id =?`,
      [elder_id],
      (error, results, fields) => {
        if (error) {
          //console.log(results);
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getApplications: (elder_id, callBack) => {
    pool.query(
      `SELECT * FROM verification_of_elders WHERE elder_id =?`,
      [elder_id],
      (error, results, fields) => {
        if (error) {
          console.log(results);
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getApplicationsForFofficer: (officer_id,limitf,limitl,grama_division, callBack) => {
    console.log(grama_division)
    if(grama_division){
     sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NOT NULL AND validity_by_gramaniladari=1 AND  elder.elder_id = verification_of_elders.elder_id`
     sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE gramaniladari_division_id=${grama_division} AND divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NOT NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
    }
    else{
    sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NOT NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id`
    sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NOT NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
    }
    console.log(sql)
    pool.query(
        sqlc
        ,
        [officer_id],
        (error, count, fields) => {
          if (error) {
            return callBack(error);
            //return callBack(error);
          }

          //second
          
          pool.query(
           sql
              , 
            [officer_id ,limitf,limitl],
            (error, results, fields) => {
              if (error) {
                return callBack(error);
                //return callBack(error);
              }
              return callBack(null,results, count[0].total);
             // return callBack(null, results[0]);
    
            }
          );

         // return callBack(null, results[0]);

        }
      );
  },
  getSelectedApplicationsForFofficer: (officer_id,limitf,limitl,grama_division, callBack) => {
    if(grama_division){
      sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND  elder.elder_id = verification_of_elders.elder_id`
      sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE gramaniladari_division_id=${grama_division} AND divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
     }
     else{
     sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id`
     sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
     }
    pool.query(
        sqlc
        ,
        [officer_id],
        (error, count, fields) => {
          if (error) {
            return callBack(error);
            //return callBack(error);
          }

          //second
          
          pool.query(
           sql
              , 
            [officer_id,limitf,limitl],
            (error, results, fields) => {
              if (error) {
                return callBack(error);
                //return callBack(error);
              }
              return callBack(null,results, count[0].total);
             // return callBack(null, results[0]);
    
            }
          );

         // return callBack(null, results[0]);

        }
      );
  },
  selectApplicaton: (vid,divofficerid, callBack) => {
    pool.query(
      `UPDATE verification_of_elders SET divisional_officer_id=? WHERE vid=?`,
      [
        divofficerid,
        vid
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  removeApplicaton: (vid, callBack) => {
    pool.query(
      `UPDATE verification_of_elders SET divisional_officer_id = NULL WHERE vid=?`,
      [
        vid
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results)
        return callBack(null, results[0]);
      }
    );
  },

};
