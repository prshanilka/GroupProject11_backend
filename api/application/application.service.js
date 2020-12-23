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
        return callBack(null, results[0]);
      }
    );
  },
  getAppliationDHead: (officer_id,limitf,limitl,grama_division, callBack) => {
    if(grama_division){
     sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND validity_by_divisional_head IS NULL AND validity_by_divisional_officer=1 AND elder.elder_id = verification_of_elders.elder_id`
     sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE gramaniladari_division_id=${grama_division} AND divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND validity_by_divisional_head IS NULL AND validity_by_divisional_officer=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
    }
    else{
    sqlc= `SELECT COUNT(verification_of_elders.elder_id) AS total FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=?) ) AND validity_by_divisional_head IS NULL AND validity_by_divisional_officer=1 AND elder.elder_id = verification_of_elders.elder_id`
    sql=`SELECT verification_of_elders.vid,verification_of_elders.elder_id,elder.name,elder.gramaniladari_division_id FROM verification_of_elders,elder where elder.elder_id IN( SELECT elder_id FROM elder WHERE divisional_secratory_id IN( SELECT divisional_secratary_id FROM divisional_secratory_officer WHERE officer_id=2) ) AND validity_by_divisional_head IS NULL AND validity_by_divisional_officer=1 AND elder.elder_id = verification_of_elders.elder_id LIMIT ?,?`
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
            [limitf-1,limitl-1],
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
  verifyApplicationByHead: (vid,divheadid, callBack) => {
    pool.query(
      `UPDATE verification_of_elders SET 	divisional_head_id=? ,validity_by_divisional_head=1 WHERE vid=?`,
      [
        divheadid,
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
  refreshPrirityList: (divisionalid, callBack) => {
    pool.query(
        `SELECT  count_of_benifishers_elders AS count FROM divisional_secratory_office WHERE divisional_secratary_id=?`
        ,
        [divisionalid],
        (error, count, fields) => {
          if (error) {
            return callBack(error);
            //return callBack(error);
          }

          //second
          sql=`SELECT COUNT(*) AS tot FROM priority_list WHERE is_deleted=0 AND divisional_sec =?`
          pool.query(sql,[divisionalid],
            (error, tot, fields) => {
              if (error) {
                return callBack(error);
              }
              c=count[0].count-tot[0].tot
              if(c>0){
                sqla=`SELECT elder.elder_id,elder.divisional_secratory_id,finalmarks.final_marks FROM elder,verification_of_elders,finalmarks WHERE
                elder.elder_id=verification_of_elders.elder_id AND verification_of_elders.vid=finalmarks.v_id AND verification_of_elders.validity_by_divisional_head=1 AND  elder.divisional_secratory_id=? and elder.elder_id NOT IN(SELECT priority_list.elder_id from priority_list) ORDER BY finalmarks.final_marks DESC,finalmarks.added ASC LIMIT ?`
                pool.query(sqla, [divisionalid,c],
                      (error, data, fields) => {
                        if (error) {
                          return callBack(error);
                          //return callBack(error);
                        }
                        if(data.length==0){
                          return callBack(null,"wow")

                        }
                                arr=[];
                                sqlv="INSERT INTO priority_list(elder_id, divisional_sec) VALUES (?,?)"
                                i=0;
                                data.forEach(element => {
                                  if(i==1){
                                    sqlv +=",(?,?)" ;
                                  }
                                  arr.push(element.elder_id)
                                  arr.push(element.divisional_secratory_id)
                                  i=1
                                });  
                                pool.query(sqlv, arr,
                                      (error, results, fields) => {
                                        if (error) {
                                          return callBack(error);
                                        }
                                        return callBack(null,results);
                                      }
                                );

                  
                      }
                );
              





              }
              //return callBack(null,0);

    

    
            }
          );




        }
      );
  },


  



};
