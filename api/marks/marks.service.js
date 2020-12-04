const pool = require("../../config/database");

module.exports = {
  getCriteria: (callBack) => {
    pool.query(
      `SELECT criteria_id,criteria FROM criteria WHERE is_deleted=?`
      ,[0]
      ,
      (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  insertMarks: (vid,data,callBack) => {
    arr=[];
    sql="INSERT INTO criteriamarks(criteria_id,v_id,marks) VALUES (?,?,?)"
    i=0;
    data.forEach(element => {
      if(i==1){
        sql +=",(?,?,?)" ;
      }
      arr.push(element.criteria_id)
      arr.push(vid)
      arr.push(element.marks)
      i=1
    });
    pool.query(
      sql,
      arr,
      (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
    
  },
  insertFinalMarks: (vid,marks,callBack) => {
    pool.query(
      `INSERT INTO finalmarks(v_id,final_marks,added) VALUES (?,?,now())`
      ,[vid,marks]
      ,
      (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
