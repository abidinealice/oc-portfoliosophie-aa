//-------------------------------------------------------//
//-------- PARTIE MES PROJETS
//-------------------------------------------------------//

const urlWorks = "http://localhost:5678/api/works";
const containerGallery = document.querySelector(".gallery");
let workProjects = [];
const containerCategories = document.querySelector("#categories");
const modalContainerGallery = document.querySelector(".modal-gallery");

//AFFICHAGE DES PROJETS

function displayProjects(obj) {
  for (projects = 0; projects < obj.length; projects++) {
    containerGallery.innerHTML += `<figure data-id="${obj[projects].id}" >
  <img src="${obj[projects].imageUrl}" alt="${obj[projects].title}">
  <figcaption>${obj[projects].title}</figcaption>
</figure>`;
  }
}

function displayProjectsModal(obj) {
  for (projects = 0; projects < workProjects.length; projects++) {
    let htmlFigure = document.createElement("figure");
    htmlFigure.setAttribute("data-id", obj[projects].id);

    let htmlImg = document.createElement("img");
    htmlImg.setAttribute("src", obj[projects].imageUrl);
    htmlImg.setAttribute("alt", obj[projects].title);

    let htmlI = document.createElement("i");
    htmlI.setAttribute("class", "fa-solid fa-trash-can");
    htmlI.setAttribute("id", obj[projects].id);

    htmlFigure.appendChild(htmlImg);
    htmlFigure.appendChild(htmlI);
    modalContainerGallery.appendChild(htmlFigure);
  }
}

async function getWorks() {
  let err = "La connexion au serveur a échoué";
  try {
    const response = await fetch(urlWorks);
    const works = await response.json();
    workProjects = works;
    console.log(workProjects);
    console.log(workProjects.length);

    displayProjects(works);

    //GALLERY MODAL --- AFFICHAGE

    displayProjectsModal(works);
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
  //ON CHANGE LA COULEUR DU BOUTON

  let backgroundColor = buttonTous.style.backgroundColor;

  if (backgroundColor === "white") {
    changeColor(buttonTous, buttonObjets, buttonAppartements, buttonHotelres);
  }
  //ON VIDE LA GALLERIE

  containerGallery.innerHTML = "";

  //ON AFFICHE LES PROJETS
  displayProjects(workProjects);
});

//AFFICHAGE DES PROJETS OBJETS AU CLICK SUR LE BOUTON

buttonObjets.addEventListener("click", function onClick(event) {
  //ON CHANGE LA COULEUR DU BOUTON
  let backgroundColor = buttonObjets.style.backgroundColor;

  if (backgroundColor === "#1D6154") {
    buttonObjets.style.backgroundColor = "white";
  } else {
    changeColor(buttonObjets, buttonTous, buttonAppartements, buttonHotelres);
  }

  //ON VIDE LA GALLERIE
  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS
  let filteredObjects = workProjects.filter((objects) => {
    return objects.categoryId == 1;
  });

  //ON AFFICHE LES PROJETS FILTRES
  displayProjects(filteredObjects);
});

//AFFICHAGE DES PROJETS APPARTEMENTS AU CLICK SUR LE BOUTON

buttonAppartements.addEventListener("click", function onClick(event) {
  //ON CHANGE LA COULEUR DU BOUTON
  const backgroundColor = buttonAppartements.style.backgroundColor;

  if (backgroundColor === "#1D6154") {
    buttonAppartements.style.backgroundColor = "white";
  } else {
    changeColor(buttonAppartements, buttonTous, buttonObjets, buttonHotelres);
  }

  //ON VIDE LA GALLERIE
  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS
  let filteredAppartments = workProjects.filter((appartments) => {
    return appartments.categoryId == 2;
  });

  //ON AFFICHE LES PROJETS FILTRES
  displayProjects(filteredAppartments);
});

//AFFICHAGE DES PROJETS HOTELRES AU CLICK SUR LE BOUTON

buttonHotelres.addEventListener("click", function onClick(event) {
  //ON CHANGE LA COULEUR DU BOUTON
  const backgroundColor = buttonHotelres.style.backgroundColor;

  if (backgroundColor === "#1D6154") {
    buttonHotelres.style.backgroundColor = "white";
  } else {
    changeColor(buttonHotelres, buttonTous, buttonObjets, buttonAppartements);
  }

  //ON VIDE LA GALLERIE
  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS
  let filteredHotelres = workProjects.filter((hotelres) => {
    return hotelres.categoryId == 3;
  });

  //ON AFFICHE LES PROJETS FILTRES
  displayProjects(filteredHotelres);
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

function updateGalleryAndModal() {
  containerGallery.innerHTML = "";
  modalContainerGallery.innerHTML = "";
  getWorks();
}

function addToGalleryAndModal() {
  async function getNewWork() {
    let error = "La connexion au serveur a échoué";
    try {
      const response = await fetch(urlWorks);
      const works = await response.json();
      let newProject = [works.pop()];

      //GALLERY --- AFFICHAGE
      displayProjects(newProject);

      //GALLERY MODAL --- AFFICHAGE
      displayProjectsModal(newProject);
    } catch (error) {
      console.log(error);
    }
  }
  getNewWork();
}

//GALLERY MODAL --- SUPPRIMER PROJET

modalContainerGallery.addEventListener("click", function onClick(e) {
  if (e.target.classList.contains("fa-trash-can")) {
    console.log(e.target.id);
    const workId = e.target.id;
    console.log(workId);

    async function deleteProjects() {
      let error = "Le projet n est pas supprimé";
      let connected = "Le projet a bien été supprimé";
      try {
        const res = await fetch(`http://localhost:5678/api/works/${workId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          alert(connected);
          updateGalleryAndModal();
        } else {
          console.error("Erreur lors de la suppression de l'élement");
        }
      } catch (error) {
        console.error(error);
      }
    }
    deleteProjects();
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
const modalAddBtnSubmit = document.querySelector(".modal-add-btn");

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
  modalAddImg.style.display = "none";
  modalAddBtn.style.display = "none";
  modalAddTxt.style.display = "none";
  modalContainerAddPicture.style.padding = "0";
});

// ENVOIE DU FORMULAIRE

function setCategoryId(str) {
  if (str == "objet") {
    return "1";
  } else if (str == "appartements") {
    return "2";
  } else if (str == "hotelsres") {
    return "3";
  }
}

modalFormAdd.addEventListener("submit", function (evt) {
  evt.preventDefault();

  //const formImgSrc = modalAddPreview.getAttribute("src");
  const formImg = modalAddBtnInput.files[0];
  const formTitle = evt.target.querySelector("[name=title]").value;
  const formCategory = setCategoryId(
    evt.target.querySelector("[name=category]").value
  );
  const msgError = document.querySelector(".msg-error");
  const msgErrorAPI = document.querySelector(".msg-error-api");

  //FONCTION VERIFIE LE FORMULAIRE

  function validForm(form) {
    if (formImg == "" || formTitle == "" || formCategory === undefined) {
      msgError.removeAttribute("hidden");
    } else {
      modalAddBtnSubmit.style.backgroundColor = "#1D6154";
      return true;
    }
  }

  // FONCTION RESET FORM

  function resetForm() {
    modalFormAdd.reset();
    modalAddImg.style.display = "block";
    modalAddBtn.style.display = "block";
    modalAddTxt.style.display = "block";
    modalContainerAddPicture.style.padding = "20px 20px 10px 20px";
    modalAddPreview.style.display = "none";
  }

  if (validForm(formData) == true) {
    //Creation du FormData
    var formData = new FormData();
    formData.append("image", formImg);
    formData.append("title", formTitle);
    formData.append("category", parseInt(formCategory));

    // ON ENVOIE LES DONNES

    async function sendForm() {
      let connected = "Le formulaire a bien été envoyé";
      let error = "La connexion au serveur a échoué";
      try {
        const response = await fetch(urlWorks, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        if (response.ok) {
          alert(connected);
          resetForm();
          modal.style.visibility = "hidden";
          updateGalleryAndModal();
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
    sendForm();
  }
});
