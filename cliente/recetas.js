let arrayProducts = [];
window.onload = async function () {
  try {
    const resp = await fetch("http://localhost:3400/api/list");
    const json = await resp.json();
    if (!json.data) return;
    arrayProducts = json.data;
    const divContainer = document.getElementById("colCard");
    json.data.forEach((element) => {
      const div = document.createElement("div");
      div.className = "col-md-4";
      div.innerHTML = `
        <div class="card" >
        <img src="http://localhost:3400/images/${element.imagenReceta}" class="img-fluid card-img-top" style='width:60px'>
        <div class="card-body">
        <h5 class="card-title">${element.nombreReceta} ${element.model}</h5>
        <button type="button" class="btn btn-primary" onclick='addToCart(${element.id_product})'>Ver detalle</button>
        </div>
        </div>`;
      //
      divContainer.append(div);
    });
  } catch (error) {
    console.log("error ", error);
  }