//PARTIE MES PROJETS

//API WORKS

const urlWorks = "http://localhost:5678/api/works";
const containerGallery = document.getElementById("gallery");

const getWorks = () => {
  fetch(urlWorks)
    .then(function (res) {
      return res.json();
    })
    .then(function (works) {
      console.log(works);
      for (projects in works) {
        containerGallery.innerHTML += `<figure>
                <img src="${works[projects].imageUrl}" alt="${works[projects].title}">
                <figcaption>${works[projects].title}</figcaption>
        </figure>`;
      }
    });
};

//LANCEMENT

getWorks();
