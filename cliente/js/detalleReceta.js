let arrayRecetas = [];

window.onload = async function () {
  idReceta= localStorage.getItem("idReceta");
  try {
    const resp = await fetch("http://localhost:3400/api/listReceta");
    const json = await resp.json();
    if (!json.data) return;
      const divContainer = document.getElementById("colCard");
          const div = document.createElement("div");
          div.className = "col-md-4";
          div.innerHTML = `
          <div class="box">
          <img src="http://127.0.0.1:5500${elemento.imagenReceta}" alt="">
          <div>
              <h3>${elemento.ingredientesReceta}</h3>
              <h3>${elemento.preparacionReceta}</h3>
          </div>
        }
    </div>`; 

      divContainer.append(div);
  } catch (error) {
    console.log("error ", error);
  }
}