const db = require("./db.service");

async function auth(username, password) {
  const data = await db.query(
    `SELECT user_id, user_name, role FROM user WHERE user_name= ? AND password= ? ;`,
    [username, password],
  );

  return data;
}

module.exports = {
  auth,
};
