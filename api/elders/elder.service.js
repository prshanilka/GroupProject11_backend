const pool = require("../../config/database");

module.exports = {
  getElderByElderID: (elder_id, callBack) => {
    pool.query(
      `SELECT * FROM elder WHERE elder_id=?`,
      [elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  createElders: (data, callBack) => {
    pool.query(
      "INSERT INTO `elder` (`district_id`, `divisional_secratory_id`, `gramaniladari_division_id`, `near_post_office_id`, `name`,`sex`, `email`, `address`, `birth_day`, `number`, `nic_id`, `elders_reg_id`, `local_commity_elder_name`, `local_commity_elder_id`, `lives_with_whome`, `other_elders_name`, `other_elders_nic`, `elders_member_no`, `other_name_and_description`, `source_of_income`, `income`, `samurdi_no`, `people_adi_no`) VALUES( ?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?,?,?) ",
      [
        data.district_id,
        data.divisional_secratory_id,
        data.gramaniladari_division_id,
        data.near_post_office_id,
        data.name,
        data.sex,
        data.email,
        data.address,
        data.birth_day,

        data.number,
        data.nic_id,
        data.elders_reg_id,
        data.local_commity_elder_name,
        data.local_commity_elder_id,
        data.lives_with_whome,
        data.other_elders_name,

        data.other_elders_nic,
        data.elders_member_no,
        data.other_name_and_description,
        data.source_of_income,
        data.income,
        data.samurdi_no,
        data.people_adi_no,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },
  getElders: (callBack) => {
    pool.query(`SELECT * FROM elder`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  updateElders: (data, callBack) => {
    pool.query(
      "UPDATE `elder` SET `district_id`=?,`divisional_secratory_id`=?,`gramaniladari_division_id`=?,`near_post_office_id`=?,`name`=?,`sex`=?, `email`=?,`address`=?,`birth_day`=?, `number` =?, `nic_id` =?, `elders_reg_id` =?, `local_commity_elder_name` =?, `local_commity_elder_id` =?, `lives_with_whome` =?, `other_elders_name` =?, `other_elders_nic` =?, `elders_member_no` =?, `other_name_and_description` =?, `source_of_income` =?, `income` =?, `samurdi_no` =?, `people_adi_no` =?,`still_alive` =? WHERE`elder_id` =? ",
      [
        data.district_id,
        data.divisional_secratory_id,
        data.gramaniladari_division_id,
        data.near_post_office_id,
        data.name,
        data.sex,
        data.email,
        data.address,
        data.birth_day,

        data.number,
        data.nic_id,
        data.elders_reg_id,
        data.local_commity_elder_name,
        data.local_commity_elder_id,
        data.lives_with_whome,
        data.other_elders_name,

        data.other_elders_nic,
        data.elders_member_no,
        data.other_name_and_description,
        data.source_of_income,
        data.income,
        data.samurdi_no,
        data.people_adi_no,
        data.still_alive,
        data.elder_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteElders: (data, callBack) => {
    pool.query(
      "UPDATE `elder` SET  `is_deleted` ='1'   WHERE `elder_id` =?",
      [data.elder_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  //select Elders to verify list where in
  selectElderMultipleId: (data, callBack) => {
    pool.query(
      "SELECT * FROM `elder` WHERE `is_deleted`='0' and `elder_id` in " + data,
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
