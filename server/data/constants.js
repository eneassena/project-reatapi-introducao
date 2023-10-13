const TABLE = "post";
module.exports = {
    QUERY_INSERT_INTO_TABLE: `insert into ${TABLE} (title,content) values(?,?)`,
    QUERY_SELECT_TABLE: `select * from ${TABLE}`,
    QUERY_SELECT_BY_ID_TABLE: `select * from ${TABLE} where id = ?`,
    QUERY_UPDATE_TABLE: `UPDATE ${TABLE} SET title=?, content=? WHERE id=?`,
    QUERY_DELETE_FROM_TABLE: `DELETE FROM ${TABLE} WHERE id=?`
}