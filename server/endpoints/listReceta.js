const { functionMysql } = require("../utils/mysql");
exports.listReceta = async function listReceta(req, res) {
let idReceta = localStorage.getItem(idReceta)
  try {
    const conn = await functionMysql();
    const query = `SELECT * FROM recetas WHERE idReceta=1`;
    conn.query(
      query,
      [idReceta],
      function (error, result, fields) {
        if (error) return res.status(304).json({ message: "error" });
        res.status(200).json({ message: "ok" });
        conn.end((err) => {
          //   console.log("Conexión a DB cerrada");
        });
      conn.end((err) => {
        //   console.log("Conexión a DB cerrada");
      });
    });
  } catch (error) {
    console.log("error es, ", error);
  }
}

