const save = document.getElementById("updateStock");
save.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    const prod = document.getElementById("producto").value;
    const cat = document.getElementById("categoria").value;
    const fec = document.getElementById("fecha").value;
    const prec = document.getElementById("precioUnitario").value;
    const cant = document.getElementById("cantidad").value;
    const uni = document.getElementById("unidadMedida").value;
    
    var data =  {
      producto: prod, 
      categoria: cat, 
      fecha: fec, 
      precioUnitario: prec, 
      cantidad: cant,
       unidadMedida: uni
      };
      alert(prod+ " actualizado!");
    fetch("http://localhost:3400/api/update", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
      .then((res) => res.json())
      .then((data) => console.log("data es", data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("error es", error);
  }
});
