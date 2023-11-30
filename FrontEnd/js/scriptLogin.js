const urlLogin = "http://localhost:5678/api/users/login";

function ajoutListenerEnvoyerLogin() {
  const formEmail = document.querySelector(".form-login");
  formEmail.addEventListener("submit", function (event) {
    event.preventDefault();

    const formLogin = {
      email: event.target.querySelector("[name:email]"),
      value,
      password: event.target.querySelector("[name:password]"),
      value,
    };

    const chargeUtile = JSON.stringify(formLogin);

    fetch(urlLogin, {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: chargeUtile,
    });
  });
}
