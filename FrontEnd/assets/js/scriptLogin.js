const urlLogin = "http://localhost:5678/api/users/login";
const formLogin = document.querySelector(".form-login");

const msgError = document.querySelector(".msg-error");
let letoken = [];

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  // ON RECUPERE LES DONNEES DU FORMULAIRE
  // Création de l’objet
  const formData = {
    email: event.target.querySelector("[name=email]").value,
    password: event.target.querySelector("[name=password]").value,
  };

  //Creation de la charge utile au format JSON
  const chargeUtile = JSON.stringify(formData);

  // ON ENVOIE LES DONNES

  async function sendForm() {
    let error = "La connexion au serveur a échoué";
    try {
      const response = await fetch(urlLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: chargeUtile,
      });
      const valueToken = await response.json();
      if (response.ok) {
        const utilToken = valueToken.token;
        window.sessionStorage.setItem("valueToken", utilToken);

        //On cache le message d'erreur s'il est affiché
        if (msgError.hasAttribute("hidden") == false) {
          msgError.setAttribute("hidden", "");
        }

        window.location.href = "./index.html";
      } else {
        //on affiche le message d'erreur si l'utilisateur s'est trompé dans l'email ou mdp
        if (msgError.hasAttributes("hidden")) {
          msgError.removeAttribute("hidden");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  sendForm();
});
