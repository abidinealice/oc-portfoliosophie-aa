//PARTIE MES PROJETS

//API WORKS

const urlWorks = "http://localhost:5678/api/works";
const containerGallery = document.querySelector(".gallery");

async function getWorks() {
  const response = await fetch(urlWorks);
  const works = await response.json();
  console.log(works);
  console.log(typeof works);

  const valuesWorks = JSON.stringify(works);
  console.log(typeof valuesWorks);

  window.localStorage.setItem("works", valuesWorks);
  console.log(works);
}

getWorks();

let work = window.localStorage.getItem("works");
console.log(work);
console.log(typeof work);
let workProjects = JSON.parse(work);
console.log(workProjects);
console.log(typeof workProjects);

// BOUTON FILTRES

const buttonTous = document.getElementById("btnTous");
const buttonObjets = document.getElementById("btnObjets");
const buttonAppartements = document.getElementById("btnAppart");
const buttonHotelres = document.getElementById("btnHotelres");

buttonObjets.addEventListener("click", function onClick(event) {
  containerGallery.innerHTML = "";

  //async function getWork() {
  //  const response = await fetch(urlWorks);
  //  const works = await response.json();
  //  return console.log(works);
  //}

  //let filteredCategories = getWork.filter((objects) => {
  //  return objects.categoryID == 1;
  //});
  //getWork();
});

//LANCEMENT

//getWorks();
//displayWorks();
