document.querySelector("#btnLogin").addEventListener("click", () => {
  const user = document.querySelector("#user").value;
  const password = document.querySelector("#pass").value;
  try {
    // check if the email and password are valid
    if (user === "admin" && password === "1234") {
      window.location.href = "/cliente/administrador.html";
    } else {
      alert("Credenciales incorrectas");
      window.location.href = "/index.html";
    }
  } catch (error) {
    console.log("error es, ", error);
  }
});
