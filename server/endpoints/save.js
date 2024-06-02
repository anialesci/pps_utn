const { functionMysql } = require("../utils/mysql");
const fs = require("fs");
exports.save = async (req, res) => {
  try {
    const { nombreReceta, ingredientesReceta,preparacionReceta } = req.body;
    const conn = await functionMysql();
    const query = `INSERT INTO recetas (nombreReceta, ingredientesReceta, preparacionReceta) VALUES (?, ?, ?)`;
    conn.query(
      query,
      [nombreReceta, ingredientesReceta, preparacionReceta],
      async function (error, results, fields) {
        if (error) return res.status(304).json({ message: "error" });
        const productId = results.insertId;
        if (req.file) {

          const image = req.file;
          const imageExtension = image.originalname.split(".").pop();
          const imageName = `${productId}.${imageExtension}`;
          await fs.promises.rename(image.path, `./images/${imageName}`);
          const updateQuery = `UPDATE recetas SET image = ? WHERE idReceta = ?`;
          conn.query(
            updateQuery,
            [imageName, productId],
            function (error, results, fields) {
              if (error) return res.status(304).json({ message: "error" });
              res.status(200).json({ message: "ok" });
              conn.end((err) => {
                //   console.log("Conexión a DB cerrada");
              });
            }
          );
        } else {
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
