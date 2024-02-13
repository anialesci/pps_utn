const mysql = require("mysql");
const functionMysql = async () => {
    const pool = await mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "lina",
      });
  // pool.on("error", functionMysql());

  return pool;
};

module.exports = { functionMysql };