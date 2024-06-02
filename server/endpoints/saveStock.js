const { functionMysql } = require("../utils/mysql");
const fs = require("fs");
exports.saveStock = async (req, res) => {
  try {
    const {producto, categoria, fecha, precioUnitario, cantidad, unidadMedida } = req.body;
    const conn = await functionMysql();
    const query = `INSERT INTO stock (producto, categoria, fecha, precioUnitario, cantidad, unidadMedida) VALUES (?, ?, ?, ?, ?, ?)`;
    conn.query(
      query,
      [producto, categoria, fecha, precioUnitario, cantidad, unidadMedida],
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
