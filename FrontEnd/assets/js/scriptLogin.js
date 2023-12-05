const urlLogin = "http://localhost:5678/api/users/login";
const formLogin = document.querySelector(".form-login");

//let formEmail = document.querySelector("#email");
//let formPassword = document.querySelector("#password");
const msgError = document.querySelector(".msg-error");
//console.log(msgError);

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  // ON RECUPERE LES DONNEES DU FORMULAIRE
  // Création de l’objet
  const formData = {
    email: event.target.querySelector("[name=email]").value,
    password: event.target.querySelector("[name=password]").value,
  };
  //console.log(formData);
  //console.log(typeof formData);

  //Creation de la charge utile au format JSON
  const chargeUtile = JSON.stringify(formData);
  //console.log(chargeUtile);
  //console.log(typeof chargeUtile);

  // ON ENVOIE LES DONNES
  async function sendForm() {
    const response = await fetch(urlLogin, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: chargeUtile,
    });
    const valueToken = await response.json();
    //console.log(valueToken);
    //console.log(typeof valueToken);

    if (response.ok) {
      const utilToken = JSON.stringify(valueToken);
      window.localStorage.setItem("valueToken", utilToken);
      //console.log(utilToken);
      //console.log(typeof utilToken);

      //On cache le message d'erreur s'il est affiché
      if (msgError.hasAttribute("hidden") == false) {
        msgError.setAttribute("hidden", "");
      }
      //console.log(msgError);

      window.location.href = "./index.html";
    } else {
      if (msgError.hasAttributes("hidden")) {
        msgError.removeAttribute("hidden");
      }
    }
  }
  sendForm();
});
