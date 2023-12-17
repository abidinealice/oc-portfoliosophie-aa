//-------------------------------------------------------//
//-------- PARTIE MES PROJETS
//-------------------------------------------------------//

const urlWorks = "http://localhost:5678/api/works";
const containerGallery = document.querySelector(".gallery");
let workProjects = [];
//const urlCategories = "http://localhost:5678/api/categories";
//let categoriesProjects = [];
const containerCategories = document.querySelector("#categories");

//AFFICHAGE DES PROJETS

function displayProjects(obj) {
  for (projects in obj) {
    containerGallery.innerHTML += `<figure data-id="${[projects]}" >
  <img src="${obj[projects].imageUrl}" alt="${obj[projects].title}">
  <figcaption>${obj[projects].title}</figcaption>
</figure>`;
  }
}

async function getWorks() {
  let err = "La connexion au serveur a échoué";
  try {
    const response = await fetch(urlWorks);
    const works = await response.json();
    workProjects = works;
    console.log(workProjects);

    //for (projects in works) {
    //containerGallery.innerHTML += `<figure data-id="${[projects]}" >
    //<img src="${works[projects].imageUrl}" alt="${works[projects].title}">
    //<figcaption>${works[projects].title}</figcaption>
    //</figure>`;
    //}

    displayProjects(works);

    //GALLERY MODAL --- AFFICHAGE

    const modalContainerGallery = document.querySelector(".modal-gallery");

    for (projects in workProjects) {
      //modalContainerGallery.innerHTML += `<figure data-id="${[projects]}">
      //<img src="${workProjects[projects].imageUrl}" alt="${
      //workProjects[projects].title
      //}">
      //<i class="fa-solid fa-trash-can" id="${[projects]}"></i>
      //</figure>`;
      let htmlFigure = document.createElement("figure");
      htmlFigure.setAttribute("data-id", [projects]);

      let htmlImg = document.createElement("img");
      htmlImg.setAttribute("src", workProjects[projects].imageUrl);
      htmlImg.setAttribute("alt", workProjects[projects].title);

      let htmlId = document.createElement("i");
      htmlId.setAttribute("class", "fa-solid fa-trash-can");
      htmlId.setAttribute("id", [projects]);

      htmlFigure.appendChild(htmlImg);
      htmlFigure.appendChild(htmlId);
      modalContainerGallery.appendChild(htmlFigure);
    }
  } catch (err) {
    console.error(err);
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

  //for (projects in workProjects) {
  //containerGallery.innerHTML += `<figure>
  //<img src="${workProjects[projects].imageUrl}" alt="${workProjects[projects].title}">
  //<figcaption>${workProjects[projects].title}</figcaption>
  //</figure>`;
  //}

  displayProjects(workProjects);

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

  //for (projects in filteredObjects) {
  //containerGallery.innerHTML += `<figure>
  //<img src="${filteredObjects[projects].imageUrl}" alt="${filteredObjects[projects].title}">
  //<figcaption>${filteredObjects[projects].title}</figcaption>
  //</figure>`;
  //}
  displayProjects(filteredObjects);

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

  //for (projects in filteredAppartments) {
  //containerGallery.innerHTML += `<figure>
  //<img src="${filteredAppartments[projects].imageUrl}" alt="${filteredAppartments[projects].title}">
  //<figcaption>${filteredAppartments[projects].title}</figcaption>
  //</figure>`;
  //}

  displayProjects(filteredAppartments);

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

  //for (projects in filteredHotelres) {
  //containerGallery.innerHTML += `<figure>
  //<img src="${filteredHotelres[projects].imageUrl}" alt="${filteredHotelres[projects].title}">
  //<figcaption>${filteredHotelres[projects].title}</figcaption>
  //</figure>`;
  //}

  displayProjects(filteredHotelres);

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
console.log(token);

const logout = document.querySelector(".lien-logout");
const login = document.querySelector(".lien-login");

//On vide le session storage, token supprimé

logout.addEventListener("click", function onClick(event) {
  sessionStorage.removeItem("valueToken");
});

//HIDE OR SHOW MODE EDITION

const editingMode = document.querySelector(".editing-mode");
const procjectSection = document.querySelector(".section-project");
const editing = document.querySelector(".editing");
const modal = document.querySelector("#modal1");

//Si l'utilisateur n'est pas connecté:
// - on cache le mode édition

if (token == null) {
  editingMode.remove();
  editing.remove();
  modal.style.visibility = "hidden";
}

//HIDE LOGIN SHOW LOGOUT
//Si l'utilisateur est connecté :
// - on affiche le mode édition
// - on cache le login
// - on active le logout
// - on cache les boutons catégories

if (token !== null && logout.hasAttribute("hidden")) {
  logout.removeAttribute("hidden");
  login.setAttribute("hidden", "");
  modal.style.visibility = "hidden";
  containerCategories.style.display = "none";
  procjectSection.style.marginBottom = "70px";

  //SHOW MODAL
  //lorsqu'on clique sur "modifier", le modal s'active/s'ouvre
  const btnModalShow = document.querySelector(".btn-modal-show");

  btnModalShow.addEventListener("click", function onClick(event) {
    modal.style.visibility = "visible";
  });
}

//HIDE MODAL
//lorsqu'on clique sur icon x, le modal se désactive/se ferme

const modalBtnXMark = document.querySelector(".btn-modal-xmark");
const modalBtnXMarkAdd = document.querySelector(".btn-modal-xmark-add");

modalBtnXMark.addEventListener("click", function onClick(event) {
  modal.style.visibility = "hidden";
});
modalBtnXMarkAdd.addEventListener("click", function onClick(event) {
  modal.style.visibility = "hidden";
});

//GALLERY MODAL --- SUPPRIMER PROJET

const modalContainerGallery = document.querySelector(".modal-gallery");

function removeProject(strInt) {
  if (strInt == "0") {
    const elements = document.querySelectorAll("[data-id= '0']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "1") {
    const elements = document.querySelectorAll("[data-id= '1']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "2") {
    const elements = document.querySelectorAll("[data-id= '2']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "3") {
    const elements = document.querySelectorAll("[data-id= '3']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "4") {
    const elements = document.querySelectorAll("[data-id= '4']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "5") {
    const elements = document.querySelectorAll("[data-id= '5']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "6") {
    const elements = document.querySelectorAll("[data-id= '6']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "7") {
    const elements = document.querySelectorAll("[data-id= '7']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "8") {
    const elements = document.querySelectorAll("[data-id= '8']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "9") {
    const elements = document.querySelectorAll("[data-id= '9']");
    elements.forEach((element) => element.remove());
  } else if (strInt == "10") {
    const elements = document.querySelectorAll("[data-id= '10']");
    elements.forEach((element) => element.remove());
  }
}

modalContainerGallery.addEventListener("click", function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-can")) {
    e.preventDefault();
    console.log(e.target.id);
    const workId = e.target.id;
    console.log(workId);

    //fetch(`http://localhost:5678/api/works/${workId}`, {
    //method: "DELETE",
    //headers: { Authorization: `Bearer ${token}` },
    //});

    //on actualise les projets
    //removeProject(workId);

    async function deleteProjects() {
      let er = "Le projet n est pas supprimé";
      try {
        const res = await fetch(`http://localhost:5678/api/works/${workId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          //on actualise les projets
          removeProject(workId);
        }
      } catch (er) {
        console.error(er);
      }
    }
    //deleteProjects();
  }
});

//ADD MODAL --- AJOUTER PROJET

const modalBtnAdd = document.querySelector(".btn-modal-ajout");
const modalGallery = document.querySelector(".modal-wrapper-gallery");
const modalAdd = document.querySelector(".modal-wrapper-add");
const modalBtnArrowLeft = document.querySelector(".btn-modal-arrowleft");
const modalFormAdd = document.querySelector(".modal-add-form");

modalBtnAdd.addEventListener("click", function onClick(ev) {
  modalGallery.style.display = "none";
  modalAdd.removeAttribute("hidden");
  modalAdd.style.display = "";
});

modalBtnArrowLeft.addEventListener("click", function onClick(ev) {
  modalGallery.style.display = "";
  modalAdd.style.display = "none";
  modalAdd.setAttribute("hidden", "");
});

//AJOUT PHOTO

//IMPORTATION IMAGE

const modalContainerAddPicture = document.querySelector(".modal-add-picture");
const modalAddImg = document.querySelector(".modal-add-picture-img");
const modalAddBtn = document.querySelector(".modal-add-picture-btn");
const modalAddBtnInput = document.querySelector("#modal-add-picture-input");
const modalAddPreview = document.querySelector(".modal-add-picture-preview");
const modalAddTxt = document.querySelector(".modal-add-picture-txt");

function previewFile() {
  const file = modalAddBtnInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    // on convertit l'image en une chaîne de caractères base64
    modalAddPreview.src = reader.result;
    modalAddPreview.style.display = "block";
  });
  if (file) {
    reader.readAsDataURL(file);
  }
}

modalAddBtnInput.addEventListener("change", (event) => {
  previewFile();
});

modalAddBtn.addEventListener("click", function onClick(event) {
  modalAddBtnInput.click();
  modalAddImg.style.display = "none";
  modalAddBtn.style.display = "none";
  modalAddTxt.style.display = "none";
  modalContainerAddPicture.style.padding = "0";
});

// ENVOIE DU FORMULAIRE

function setCategoryId(str) {
  if (str == "objet") {
    return 1;
  } else if (str == "appartements") {
    return 2;
  } else if (str == "hotelsres") {
    return 3;
  }
}

modalFormAdd.addEventListener("submit", function (event) {
  event.preventDefault();

  const formImg = modalAddPreview.getAttribute("src");
  const formTitle = event.target.querySelector("[name=title]").value;
  const formCategory = setCategoryId(
    event.target.querySelector("[name=category]").value
  );
  const msgError = document.querySelector(".msg-error");
  const msgErrorAPI = document.querySelector(".msg-error-api");

  //FONCTION VERIFIE LE FORMULAIRE

  function validForm(form) {
    if (formImg == "" || formTitle == "" || formCategory === undefined) {
      msgError.removeAttribute("hidden");
    } else {
      return true;
    }
  }

  //FONCTION AJOUT NOUVEAU ELEMENT GALLERIE MODAL

  function addProjectModal(obj) {
    let htmlFigure = document.createElement("figure");
    htmlFigure.setAttribute("data-id", obj.get("category"));

    let htmlImg = document.createElement("img");
    htmlImg.setAttribute("src", obj.get("img"));
    htmlImg.setAttribute("alt", obj.get("title"));

    let htmlId = document.createElement("i");
    htmlId.setAttribute("class", "fa-solid fa-trash-can");
    htmlId.setAttribute("id", obj.get("category"));

    htmlFigure.appendChild(htmlImg);
    htmlFigure.appendChild(htmlId);
    modalContainerGallery.appendChild(htmlFigure);
  }

  //FONCTION AJOUT NOUVEAU ELEMENT GALLERIE MES PROJETS

  function addProject(obj) {
    let htmlFigure = document.createElement("figure");
    htmlFigure.setAttribute("data-id", obj.get("category"));

    let htmlImg = document.createElement("img");
    htmlImg.setAttribute("src", obj.get("img"));
    htmlImg.setAttribute("alt", obj.get("title"));

    let htmlFigcaption = document.createElement("figcaption");
    let htmlNewContent = document.createTextNode(obj.get("title"));

    htmlFigcaption.appendChild(htmlNewContent);
    htmlFigure.appendChild(htmlImg);
    htmlFigure.appendChild(htmlFigcaption);
    modalContainerGallery.appendChild(htmlFigure);
  }

  if (validForm(formData) == true) {
    //on peut envoyer le formulaire

    //Creation de la charge utile au format demandé
    var formData = new FormData();
    formData.append("image", formImg);
    formData.append("title", formTitle);
    formData.append("category", parseInt(formCategory));

    // ON ENVOIE LES DONNES

    async function sendForm() {
      let error = "La connexion au serveur a échoué";
      try {
        const response = await fetch(urlWorks, {
          method: "POST",
          //headers: {
          //"Content-Type": "multipart/form-data",
          //Authorization: `Bearer ${token}`,
          //},
          body: formData,
        });
        if (response.ok) {
          modal.style.visibility = "hidden";
          //fonction creant un element dans la page
          addProject();
          //fonction creant un element dans la modale
          addProjectModal();
        } else {
          //on affiche le message d'erreur
          if (msgErrorAPI.hasAttributes("hidden")) {
            msgErrorAPI.removeAttribute("hidden");
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    //sendForm();
  }
});
