const { functionMysql } = require("../utils/mysql");

exports.erase = async (req, res) => {
  try {
    const {idReceta} = req.body;
    const conn = await functionMysql();
    const query = 'DELETE FROM recetas WHERE idReceta = ? LIMIT 1';
    conn.query(query, [idReceta], function (error, results, fields) {
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