//-------------------------------------------------------//
//-------- PARTIE L'UTILISATEUR N'EST PAS CONNECTE
//-------------------------------------------------------//

//Si l'utilisateur n'est pas connecté:
// - le mode édition est caché

let token = window.sessionStorage.getItem("valueToken");
console.log(token);

const editingMode = document.querySelector(".editing-mode");
const procjectSection = document.querySelector(".section-project");
const modif = document.querySelector(".modif");
const modal = document.querySelector("#modal1");

function hideModal() {
  modal.style.visibility = "hidden";
}

if (token == null) {
  editingMode.remove();
  modif.remove();
  hideModal();
}

//-------------------------------------------------------//
//-------- PARTIE MES PROJETS
//-------------------------------------------------------//

const urlWorks = "http://localhost:5678/api/works";
const containerGallery = document.querySelector(".gallery");
let workProjects = [];
const containerCategories = document.querySelector("#categories");
const modalContainerGallery = document.querySelector(".modal-gallery");

//FONCTION AFFICHAGE DES PROJETS DANS LA GALLERIE
function displayProjects(obj) {
  for (projects = 0; projects < obj.length; projects++) {
    containerGallery.innerHTML += `<figure data-id="${obj[projects].id}" >
  <img src="${obj[projects].imageUrl}" alt="${obj[projects].title}">
  <figcaption>${obj[projects].title}</figcaption>
</figure>`;
  }
}
//FONCTION AFFICHAGE DES PROJETS DANS LA MODALE
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

    //GALLERY --- AFFICHAGE
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

// --- AFFICHAGE DE TOUS LES PROJETS AU CLICK SUR LE BOUTON

buttonTous.addEventListener("click", function onClick(event) {
  let backgroundColor = buttonTous.style.backgroundColor;

  //On change la couleur des boutons au click sur celui-ci
  if (backgroundColor === "white") {
    changeColor(buttonTous, buttonObjets, buttonAppartements, buttonHotelres);
  }

  //On vide la gallerie
  containerGallery.innerHTML = "";

  //On affiche les projets
  displayProjects(workProjects);
});

// --- AFFICHAGE DES PROJETS OBJETS AU CLICK SUR LE BOUTON

buttonObjets.addEventListener("click", function onClick(event) {
  let backgroundColor = buttonObjets.style.backgroundColor;

  //On change la couleur des boutons au click sur celui-ci
  if (backgroundColor === "#1D6154") {
    buttonObjets.style.backgroundColor = "white";
  } else {
    changeColor(buttonObjets, buttonTous, buttonAppartements, buttonHotelres);
  }

  //On vide la gallerie
  containerGallery.innerHTML = "";

  //On filtre les projets
  let filteredObjects = workProjects.filter((objects) => {
    return objects.categoryId == 1;
  });

  //On affiche les projets filtrés
  displayProjects(filteredObjects);
});

// --- AFFICHAGE DES PROJETS APPARTEMENTS AU CLICK SUR LE BOUTON

buttonAppartements.addEventListener("click", function onClick(event) {
  const backgroundColor = buttonAppartements.style.backgroundColor;

  //On change la couleur des boutons au click sur celui-ci
  if (backgroundColor === "#1D6154") {
    buttonAppartements.style.backgroundColor = "white";
  } else {
    changeColor(buttonAppartements, buttonTous, buttonObjets, buttonHotelres);
  }

  //On vide la gallerie
  containerGallery.innerHTML = "";

  //On filtre les projets
  let filteredAppartments = workProjects.filter((appartments) => {
    return appartments.categoryId == 2;
  });

  //On affiche les projets filtrés
  displayProjects(filteredAppartments);
});

// --- AFFICHAGE DES PROJETS HOTELRES AU CLICK SUR LE BOUTON

buttonHotelres.addEventListener("click", function onClick(event) {
  const backgroundColor = buttonHotelres.style.backgroundColor;

  //On change la couleur des boutons au click sur celui-ci
  if (backgroundColor === "#1D6154") {
    buttonHotelres.style.backgroundColor = "white";
  } else {
    changeColor(buttonHotelres, buttonTous, buttonObjets, buttonAppartements);
  }

  //On vide la gallerie
  containerGallery.innerHTML = "";

  //On filtre les projets
  let filteredHotelres = workProjects.filter((hotelres) => {
    return hotelres.categoryId == 3;
  });

  //On affiche les projets filtrés
  displayProjects(filteredHotelres);
});

//-------------------------------------------------------//
//-------- PARTIE L'UTILISATEUR EST CONNECTE
//-------------------------------------------------------//

const logout = document.querySelector(".lien-logout");
const login = document.querySelector(".lien-login");
const btnModalShow = document.querySelector(".btn-modal-show");
const modalWrapper = document.querySelector(".modal-wrapper");

function showModal() {
  modal.style.visibility = "visible";
}

// --- LOG IN
if (token !== null && logout.hasAttribute("hidden")) {
  logout.removeAttribute("hidden");
  login.setAttribute("hidden", "");
  hideModal();
  containerCategories.style.display = "none";
  procjectSection.style.marginBottom = "70px";
}

// --- LOG OUT
//On vide le session storage, token supprimé
logout.addEventListener("click", function onClick(event) {
  sessionStorage.removeItem("valueToken");
});

// --- SHOW MODAL
btnModalShow.addEventListener("click", function onClick(event) {
  showModal();
  modalWrapper.removeAttribute("hidden");
});

// --- HIDE MODAL
//lorsqu'on clique sur icon x, la modale se désactive/se ferme
const modalBtnXMark = document.querySelector(".btn-modal-xmark");
const modalBtnXMarkAdd = document.querySelector(".btn-modal-xmark-add");

modalBtnXMark.addEventListener("click", function onClick(event) {
  hideModal();
});
modalBtnXMarkAdd.addEventListener("click", function onClick(event) {
  hideModal();
});

// --------------------------------
// --- GALLERY MODAL --- SUPPRIMER PROJET
// --------------------------------

function updateGalleryAndModal() {
  containerGallery.innerHTML = "";
  modalContainerGallery.innerHTML = "";
  getWorks();
}

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

// --------------------------------
// --- ADD MODAL --- AJOUTER PROJET
// --------------------------------

const modalBtnAdd = document.querySelector(".btn-modal-ajout");
const modalGallery = document.querySelector(".modal-wrapper-gallery");
const modalAdd = document.querySelector(".modal-wrapper-add");
const modalBtnArrowLeft = document.querySelector(".btn-modal-arrowleft");
const modalFormAdd = document.querySelector(".modal-add-form");

function hideModalGallery() {
  modalGallery.style.display = "none";
  modalAdd.removeAttribute("hidden");
  modalAdd.style.display = "";
}

function showModalGallery() {
  modalGallery.style.display = "";
  modalAdd.style.display = "none";
  modalAdd.setAttribute("hidden", "");
}

// --- ADD MODAL --- AFFICHAGE
modalBtnAdd.addEventListener("click", function onClick(ev) {
  hideModalGallery();
});

modalBtnArrowLeft.addEventListener("click", function onClick(ev) {
  showModalGallery();
});

// --- IMPORTATION IMAGE

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
    //On convertit l'image en une chaîne de caractères base64
    modalAddPreview.src = reader.result;
    modalAddPreview.style.display = "block";
  });
  if (file) {
    reader.readAsDataURL(file);
  }
}

//Lorsqu'on clique sur le bouton, une fenêtre s'ouvre, on choisis notre image à importer
modalAddBtnInput.addEventListener("change", (event) => {
  previewFile();
  modalAddImg.style.display = "none";
  modalAddTxt.style.display = "none";
  modalContainerAddPicture.style.padding = "0";
  modalAddBtn.style.display = "none";
});

// --- ENVOIE DU FORMULAIRE

//FONCTION ATTRIBUANT UN ID
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

  const formImg = modalAddBtnInput.files[0];
  const formTitle = evt.target.querySelector("[name=title]").value;
  const formCategory = setCategoryId(
    evt.target.querySelector("[name=category]").value
  );
  const msgError = document.querySelector(".msg-error");
  const msgErrorAPI = document.querySelector(".msg-error-api");

  //FONCTION VALIDATION DU FORMULAIRE
  function validForm(form) {
    if (!formImg || !formTitle || !formCategory) {
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

    //On envoie les donnes
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
          resetForm();
          hideModal();
          showModalGallery();
          updateGalleryAndModal();
          alert(connected);
        } else {
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
