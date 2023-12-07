//-------------------------------------------------------//
//-------- PARTIE MES PROJETS
//-------------------------------------------------------//

const urlWorks = "http://localhost:5678/api/works";
const containerGallery = document.querySelector(".gallery");
let workProjects = [];
//const urlCategories = "http://localhost:5678/api/categories";
//let categoriesProjects = [];
//const containerCategories = document.querySelector("#categories");

//AFFICHAGE DES PROJETS

async function getWorks() {
  const response = await fetch(urlWorks);
  const works = await response.json();
  workProjects = works;

  for (projects in works) {
    containerGallery.innerHTML += `<figure>
    <img src="${works[projects].imageUrl}" alt="${works[projects].title}">
    <figcaption>${works[projects].title}</figcaption>
</figure>`;
  }

  //GALLERY MODAL --- AFFICHAGE

  const modalContainerGallery = document.querySelector(".modal-gallery");

  for (projects in workProjects) {
    modalContainerGallery.innerHTML += `<figure data-id="${[projects]}">
  <img src="${workProjects[projects].imageUrl}" alt="${
      workProjects[projects].title
    }">
  <i class="fa-solid fa-trash-can" id="${[projects]}"></i>
</figure>`;
  }
}

//LANCEMENT AFFICHAGE PROJETS

getWorks();

// BOUTON FILTRES + COULEURS

const buttonTous = document.getElementById("btnTous");
const buttonObjets = document.getElementById("btnObjets");
const buttonAppartements = document.getElementById("btnAppart");
const buttonHotelres = document.getElementById("btnHotelres");

buttonTous.style.backgroundColor = "#1D6154";
buttonTous.style.color = "white";

function changeColorBtnOn(btn) {
  btn.style.backgroundColor = "#1D6154";
  btn.style.color = "white";
}

function changeColorBtnOff(btn) {
  btn.style.backgroundColor = "white";
  btn.style.color = "#1D6154";
}

function changeColor(btn1, btn2, btn3, btn4) {
  changeColorBtnOn(btn1);
  changeColorBtnOff(btn2);
  changeColorBtnOff(btn3);
  changeColorBtnOff(btn4);
}

//AFFICHAGE DE TOUS LES PROJETS AU CLICK SUR LE BOUTON

buttonTous.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE

  containerGallery.innerHTML = "";

  for (projects in workProjects) {
    containerGallery.innerHTML += `<figure>
<img src="${workProjects[projects].imageUrl}" alt="${workProjects[projects].title}">
<figcaption>${workProjects[projects].title}</figcaption>
</figure>`;
  }

  //ON CHANGE LA COULEUR DU BOUTON

  let backgroundColor = buttonTous.style.backgroundColor;

  if (backgroundColor === "white") {
    changeColor(buttonTous, buttonObjets, buttonAppartements, buttonHotelres);
  }
});

//AFFICHAGE DES PROJETS OBJETS AU CLICK SUR LE BOUTON

buttonObjets.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE

  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS

  let filteredObjects = workProjects.filter((objects) => {
    return objects.categoryId == 1;
  });

  //ON AFFICHE LES PROJETS FILTRES

  for (projects in filteredObjects) {
    containerGallery.innerHTML += `<figure>
<img src="${filteredObjects[projects].imageUrl}" alt="${filteredObjects[projects].title}">
<figcaption>${filteredObjects[projects].title}</figcaption>
</figure>`;
  }

  //ON CHANGE LA COULEUR DU BOUTON

  let backgroundColor = buttonObjets.style.backgroundColor;

  if (backgroundColor === "#1D6154") {
    buttonObjets.style.backgroundColor = "white";
  } else {
    changeColor(buttonObjets, buttonTous, buttonAppartements, buttonHotelres);
  }
});

//AFFICHAGE DES PROJETS APPARTEMENTS AU CLICK SUR LE BOUTON

buttonAppartements.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE
  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS

  let filteredAppartments = workProjects.filter((appartments) => {
    return appartments.categoryId == 2;
  });

  //ON AFFICHE LES PROJETS FILTRES

  for (projects in filteredAppartments) {
    containerGallery.innerHTML += `<figure>
<img src="${filteredAppartments[projects].imageUrl}" alt="${filteredAppartments[projects].title}">
<figcaption>${filteredAppartments[projects].title}</figcaption>
</figure>`;
  }

  //ON CHANGE LA COULEUR DU BOUTON

  const backgroundColor = buttonAppartements.style.backgroundColor;

  if (backgroundColor === "#1D6154") {
    buttonAppartements.style.backgroundColor = "white";
  } else {
    changeColor(buttonAppartements, buttonTous, buttonObjets, buttonHotelres);
  }
});

//AFFICHAGE DES PROJETS HOTELRES AU CLICK SUR LE BOUTON

buttonHotelres.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE
  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS

  let filteredHotelres = workProjects.filter((hotelres) => {
    return hotelres.categoryId == 3;
  });

  //ON AFFICHE LES PROJETS FILTRES

  for (projects in filteredHotelres) {
    containerGallery.innerHTML += `<figure>
<img src="${filteredHotelres[projects].imageUrl}" alt="${filteredHotelres[projects].title}">
<figcaption>${filteredHotelres[projects].title}</figcaption>
</figure>`;
  }

  //ON CHANGE LA COULEUR DU BOUTON

  const backgroundColor = buttonHotelres.style.backgroundColor;

  if (backgroundColor === "#1D6154") {
    buttonHotelres.style.backgroundColor = "white";
  } else {
    changeColor(buttonHotelres, buttonTous, buttonObjets, buttonAppartements);
  }
});

//-------------------------------------------------------//
//-------- PARTIE L'UTILISATEUR EST CONNECTE
//-------------------------------------------------------//

//LOG OUT
//window.sessionStorage.setItem("valueToken", utilToken);
let token = window.sessionStorage.getItem("valueToken");
let valueToken = JSON.parse(token);
console.log(valueToken);

const logout = document.querySelector(".lien-logout");
const login = document.querySelector(".lien-login");

//On vide le session storage, token supprimé

logout.addEventListener("click", function onClick(event) {
  sessionStorage.removeItem("valueToken");
});

//HIDE OR SHOW MODE EDITION

const editingMode = document.querySelector(".editing-mode");
const editing = document.querySelector(".editing");
const modal = document.querySelector("#modal1");

//Si l'utilisateur n'est pas connecté:
// - on cache le mode édition

if (valueToken == null) {
  editingMode.remove();
  editing.remove();
  modal.style.visibility = "hidden";
}

//HIDE LOGIN SHOW LOGOUT
//Si l'utilisateur est connecté :
// - on affiche le mode édition
// - on cache le login
// - on active le logout

if (valueToken !== null && logout.hasAttribute("hidden")) {
  logout.removeAttribute("hidden");
  login.setAttribute("hidden", "");
  modal.style.visibility = "hidden";

  //SHOW MODAL
  //lorsqu'on clique sur "modifier", le modal s'active/s'ouvre
  const btnModalShow = document.querySelector(".btn-modal-show");

  btnModalShow.addEventListener("click", function onClick(event) {
    modal.style.visibility = "visible";
  });
}

//HIDE MODAL

const modalBtnHide = document.querySelector(".btn-modal-hide");
console.log(modalBtnHide.id);

modalBtnHide.addEventListener("click", function onClick(event) {
  modal.style.visibility = "hidden";
});

//GALLERY MODAL --- SUPPRIMER PROJET
