const { functionMysql } = require("../utils/mysql");
const fs = require("fs");
exports.saveContact = async (req, res) => {
  try {
    const {email} = req.body;
    const conn = await functionMysql();
    const query = `INSERT INTO contactos (email) VALUES (?)`;
    conn.query(
      query,
      [email],
      async function (error, results, fields) {
        if (error) {
          return res.status(304).json({ message: "error" })}
        else{
          res.status(200).json({ message: "ok" });
          conn.end((err) => {
            //   console.log("Conexión a DB cerrada");
          });
        }
      }
    );
    
  } catch (error) {
    console.log("error es, ", error);
  }
};
