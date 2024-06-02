const save = document.getElementById("deleteStock");
save.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    const nombre = document.getElementById("nombreStock").value;
    
    
    var data =  {
      nombreStock: nombre, 
      };
    alert(nombre+" eliminado");
    fetch("http://localhost:3400/api/deleteStock", {
      method: 'DELETE',
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
