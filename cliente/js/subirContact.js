const save = document.getElementById("save");
save.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    const email = document.getElementById("email").value;

    
    function replacer(key, value) {
      // Filtrando propiedades
      if (typeof value === "string") {
        return value;
      }
      return value;
    }
    var data =  {
      email: email, 
      };
      alert("Contacto registrado!");
    fetch("http://localhost:3400/api/saveContact", {
      method: 'POST',
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
