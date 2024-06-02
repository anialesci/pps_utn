const { functionMysql } = require("../utils/mysql");
const fs = require("fs");

exports.update = async (req, res) => {
  try {
    const {producto,categoria, fecha, precioUnitario, cantidad, unidadMedida } = req.body;
    const conn = await functionMysql();
    const query =
      "UPDATE stock SET categoria= ?, fecha = ?, precioUnitario = ?, cantidad = ?, unidadMedida = ? WHERE producto = ? LIMIT 1";
    conn.query(
      query,
      [categoria, fecha, precioUnitario, cantidad, unidadMedida, producto],
      async function (error, results, fields) {
        res.status(200).json({ message: "ok" });
          conn.end((err) => {
            //   console.log("Conexión a DB cerrada");
            
          });
        }
    );
  } catch (error) {
    console.log("error es, ", error);
  }
};
