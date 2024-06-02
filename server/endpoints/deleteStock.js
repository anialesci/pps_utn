const { functionMysql } = require("../utils/mysql");

exports.eraseStock = async (req, res) => {
  try {
    const {nombreStock} = req.body;
    const conn = await functionMysql();
    const query = 'DELETE FROM stock WHERE producto = ?';
    conn.query(query, [nombreStock], function (error, results, fields) {
      if (error) return res.status(304).json({message:'error'})
      res.status(200).json({
        message: "ok",
      });
      conn.end((err) => {
        //   console.log("Conexión a DB cerrada");
      });
    });
  } catch (error) {
    console.log("error es, ", error);
  }
};