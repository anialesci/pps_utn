let arrayRecetas = [];
window.onload = async function () {
  try {
    const resp = await fetch("http://localhost:3400/api/list");
    const json = await resp.json();
    if (!json.data) return;
    arrayRecetas = json.data;
    const divContainer = document.getElementById("colCard");
    json.data.forEach((element) => {
      const div = document.createElement("div");
      div.className = "col-md-4";
      div.innerHTML = `
      <div class="box">
      <img src="http://127.0.0.1:5500/images/${element.image}" alt="">
      <div>
          <h3 class="receta-titulo" >${element.nombreReceta}</h3>
          <h4 class="receta-encabezado"> Ingredientes:</h4>
          <h4 class="receta-pasos">${element.ingredientesReceta}</h3>
          <h4 class="receta-encabezado"> Preparacion:</h4>
          <h4 class="receta-pasos">${element.preparacionReceta}</h4>
      </div>
  </div>`;
      divContainer.append(div);
    });
  } catch (error) {
    console.log("error ", error);
  }
  function mostrar(idReceta){
    document.getElementById("colCard").style.display="block";
  }
 

  }
