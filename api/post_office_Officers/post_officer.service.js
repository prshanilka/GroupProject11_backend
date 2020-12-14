const pool = require("../../config/database");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO post_office_officers(officer_id,post_office_id,district_id,division,type,designation) VALUES (?,?,?,?,?,?)`,
      [
        data.officer_id,
        data.post_office_id,
        data.district_id,
        data.division,
        data.type,
        data.designation,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOfficers: (callBack) => {
    pool.query(
      `SELECT * FROM post_office_officers`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPostOfficers: (callBack) => {
    pool.query(
      "SELECT post_office_officers.officer_id as o_id ,post_office_officers.type as o_type ,officers.name as o_name ,officers.nic_no as o_nic ,officers.phone as o_phone , officers.email as o_email ,post_office_officers.designation as o_designation ,post_office_officers.division as o_division  ,post_office_officers.post_office_id as p_post ,post_office_officers.district_id as o_district ,post_office_table.name as p_name ,post_office_table.address as p_address ,post_office_table.email as p_email  FROM `post_office_officers`  ,`officers` ,`post_office_table` WHERE post_office_officers.officer_id = officers.officer_id   and post_office_officers.is_deleted = '0' and post_office_table.post_office_id = post_office_officers.post_office_id  and officers.is_deleted='0' ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  byIdGetPostOfficers: (officer_id, callBack) => {
    pool.query(
      "SELECT post_office_officers.officer_id as o_id, post_office_officers.type as o_type ,officers.name as o_name ,officers.nic_no as o_nic ,officers.phone as o_phone , officers.email as o_email ,post_office_officers.designation as o_designation ,post_office_officers.division as o_division  ,post_office_officers.post_office_id as p_post ,post_office_officers.district_id as o_district ,post_office_table.name as p_name ,post_office_table.address as p_address ,post_office_table.email as p_email  FROM `post_office_officers`  ,`officers` ,`post_office_table` WHERE post_office_officers.officer_id = officers.officer_id   and post_office_officers.is_deleted = '0' and post_office_table.post_office_id = post_office_officers.post_office_id  and officers.is_deleted='0'  and post_office_officers.`officer_id`= ?",
      [officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getOfficerByOfficerID: (officer_id, callBack) => {
    pool.query(
      `SELECT * FROM post_office_officers WHERE officer_id=?`,
      [officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getOfficerPostOfficeByOfficerID: (officer_id, callBack) => {
    pool.query(
      `SELECT post_office_id FROM post_office_officers WHERE officer_id=?`,
      [officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updatePPPPOfficers: (data, callBack) => {
    pool.query(
      `UPDATE post_office_officers SET post_office_id=?,district_id=?,division=?,type=?,designation=? WHERE officer_id=?`,
      [
        data.post_office_id,
        data.district_id,
        data.division,
        data.type,
        data.designation,
        data.officer_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteOfficers: (data, callBack) => {
    console.log(data);
    pool.query(
      `UPDATE post_office_officers SET  is_deleted='1'   WHERE officer_id=?`,
      [data.officer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
