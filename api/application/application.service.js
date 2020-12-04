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
     sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id`
     sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE gramaniladari_division_id=${grama_division} AND divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
    }
    else{
    sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id`
    sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND divisional_officer_id IS NULL AND validity_by_gramaniladari=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
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
            [officer_id ,limitf-1,limitl-1],
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
  getSelectedApplicationsForFofficer: (officer_id,limitf,limitl,grama_division, callBack) => {
    if(grama_division){
      asqlc= `SELECT COUNT(verification_of_elders.vid) AS total FROM verification_of_elders,elder WHERE divisional_officer_id=? AND validity_by_divisional_officer IS NULL AND elder.elder_id = verification_of_elders.elder_id AND gramaniladari_division_id=${grama_division} `
      asql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder WHERE divisional_officer_id=? AND validity_by_divisional_officer IS NULL AND elder.elder_id = verification_of_elders.elder_id AND gramaniladari_division_id=${grama_division} LIMIT ?,? `
     }
     else{
     asqlc= `SELECT COUNT(verification_of_elders.vid) AS total FROM verification_of_elders,elder WHERE divisional_officer_id=? AND validity_by_divisional_officer IS NULL AND elder.elder_id = verification_of_elders.elder_id `
     asql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder WHERE divisional_officer_id=? AND validity_by_divisional_officer IS NULL AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,? `
     }
    pool.query(
        asqlc
        ,
        [officer_id],
        (error, count, fields) => {
          if (error) {
            return callBack(error);
            //return callBack(error);
          }

          //second
          
          ac=pool.query(
           asql
              , 
            [officer_id,limitf-1,limitl-1],
            (error, results, fields) => {
              if (error) {
                
                return callBack(error);
                //return callBack(error);
              }
              console.log(count)
              return callBack(null,results, count[0].total);
             // return callBack(null, results[0]);
    
            }
          );

         // return callBack(null, results[0]);

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
        console.log(vid)
        return callBack(null, results[0]);
      }
    );
  },
  completeApplication: (vid, callBack) => {
    pool.query(
      `UPDATE verification_of_elders SET validity_by_divisional_officer=? WHERE vid=?`,
      [1,
        vid
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(vid)
        return callBack(null, results[0]);
      }
    );
  },


  







};
