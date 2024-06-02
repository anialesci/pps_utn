const { functionMysql } = require("../utils/mysql");
exports.listStock = async function listStock(req, res) {
  
  try {
    const conn = await functionMysql();
    const query = `SELECT * FROM stock order by categoria,producto`;
    conn.query(query, function (error, results, fields) {
      if (error) return res.status(304).json({message:'error'})
      res.status(200).json({
        message: "ok",
        data: results,
      });
      conn.end((err) => {
        //   console.log("Conexión a DB cerrada");
      });
    });
  } catch (error) {
    console.log("error es, ", error);
  }
}

