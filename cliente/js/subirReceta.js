const save = document.getElementById("save");
save.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    const nombre = document.getElementById("nombreReceta").value;
    const  ingredientes= document.getElementById("ingredientesReceta").value;
    const preparacion = document.getElementById("preparacionReceta").value;

    const formData = new FormData();
    formData.append("nombreReceta", nombre);
    formData.append("ingredientesReceta", ingredientes);
    formData.append("preparacionReceta", preparacion);
    formData.append("image", document.getElementById("formFile").files[0]);
    fetch("http://localhost:3400/api/save", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log("data es", data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("error es", error);
  }
});
