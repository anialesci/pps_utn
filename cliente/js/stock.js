let arrayRecetas = [];
window.onload = async function () {
  try {
    const resp = await fetch("http://localhost:3400/api/listStock");
    const json = await resp.json();
    if (!json.data) return;
    arrayRecetas = json.data;
    const table = document.getElementById("body");
 
    json.data.forEach((element) => {
      const tr = document.createElement("tr");
      tr.className = "col-md-5";
      tr.innerHTML = `
          <td>${element.producto}</td>
          <td>${element.categoria}</td>
          <td>${element.fecha}</td>
          <td>${element.precioUnitario}</td>
          <td>${element.cantidad} ${element.unidadMedida} </td>
          
        <script src="/cliente/js/updateStock.js"></script>
        `;
      table.append(tr);
    });
  } catch (error) {
    console.log("error ", error);
  }

}