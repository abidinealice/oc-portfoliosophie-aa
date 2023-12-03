//PARTIE MES PROJETS

//API WORKS

const urlWorks = "http://localhost:5678/api/works";
const containerGallery = document.querySelector(".gallery");

async function getWorks() {
  const response = await fetch(urlWorks);
  const works = await response.json();
  //console.log(works);
  //console.log(typeof works);

  for (projects in works) {
    containerGallery.innerHTML += `<figure>
    <img src="${works[projects].imageUrl}" alt="${works[projects].title}">
    <figcaption>${works[projects].title}</figcaption>
</figure>`;
  }

  const valuesWorks = JSON.stringify(works);
  //console.log(typeof valuesWorks);

  window.localStorage.setItem("works", valuesWorks);
  //console.log(works);
}

//LANCEMENT

getWorks();

// LOCAL STORAGE

let work = window.localStorage.getItem("works");
//console.log(work);
//console.log(typeof work);
let workProjects = JSON.parse(work);
console.log(workProjects);
//console.log(typeof workProjects);

// BOUTON FILTRES + COULEURS

const buttonTous = document.getElementById("btnTous");
const buttonObjets = document.getElementById("btnObjets");
const buttonAppartements = document.getElementById("btnAppart");
const buttonHotelres = document.getElementById("btnHotelres");

buttonTous.style.backgroundColor = "#1D6154";
buttonTous.style.color = "white";

buttonTous.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE

  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS

  let filteredTous = workProjects.filter((objects) => {
    return (
      objects.categoryId == 1 ||
      objects.categoryId == 2 ||
      objects.categoryId == 3
    );
  });

  console.log(filteredTous);

  //ON AFFICHE LES PROJETS FILTRES

  for (projects in filteredTous) {
    containerGallery.innerHTML += `<figure>
    <img src="${filteredTous[projects].imageUrl}" alt="${filteredTous[projects].title}">
    <figcaption>${filteredTous[projects].title}</figcaption>
  </figure>`;
  }

  //ON CHANGE LA COULEUR DU BOUTON

  let backgroundColor = buttonTous.style.backgroundColor;

  if (backgroundColor === "white") {
    buttonTous.style.backgroundColor = "#1D6154";
    buttonTous.style.color = "white";
    buttonObjets.style.backgroundColor = "white";
    buttonObjets.style.color = "#1D6154";
    buttonAppartements.style.backgroundColor = "white";
    buttonAppartements.style.color = "#1D6154";
    buttonHotelres.style.backgroundColor = "white";
    buttonHotelres.style.color = "#1D6154";
  }
});

buttonObjets.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE

  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS

  let filteredObjects = workProjects.filter((objects) => {
    return objects.categoryId == 1;
  });

  //console.log(filteredObjects);

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
    buttonObjets.style.backgroundColor = "#1D6154";
    buttonObjets.style.color = "white";
    buttonTous.style.backgroundColor = "white";
    buttonTous.style.color = "#1D6154";
    buttonAppartements.style.backgroundColor = "white";
    buttonAppartements.style.color = "#1D6154";
    buttonHotelres.style.backgroundColor = "white";
    buttonHotelres.style.color = "#1D6154";
  }
});

buttonAppartements.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE
  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS

  let filteredAppartments = workProjects.filter((appartments) => {
    return appartments.categoryId == 2;
  });

  //console.log(filteredAppartments);

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
    buttonAppartements.style.backgroundColor = "#1D6154";
    buttonAppartements.style.color = "white";
    buttonTous.style.backgroundColor = "white";
    buttonTous.style.color = "#1D6154";
    buttonObjets.style.backgroundColor = "white";
    buttonObjets.style.color = "#1D6154";
    buttonHotelres.style.backgroundColor = "white";
    buttonHotelres.style.color = "#1D6154";
  }
});

buttonHotelres.addEventListener("click", function onClick(event) {
  //ON VIDE LA GALLERIE
  containerGallery.innerHTML = "";

  //ON FILTRE LES PROJETS

  let filteredHotelres = workProjects.filter((hotelres) => {
    return hotelres.categoryId == 3;
  });

  //console.log(filteredHotelres);

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
    buttonHotelres.style.backgroundColor = "#1D6154";
    buttonHotelres.style.color = "white";
    buttonTous.style.backgroundColor = "white";
    buttonTous.style.color = "#1D6154";
    buttonObjets.style.backgroundColor = "white";
    buttonObjets.style.color = "#1D6154";
    buttonAppartements.style.backgroundColor = "white";
    buttonAppartements.style.color = "#1D6154";
  }
});
