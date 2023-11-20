//PARTIE MES PROJETS

//API CATEGORIES

const urlCategories = "http://localhost:5678/api/categories"
const containerCategories = document.getElementById("categories")

const filterTous = new Set();
const filterObjets = new Set();
const filterAppartements = new Set();
const filterHotelres = new Set();



const getCategories = () => {
    fetch(urlCategories)
    .then(function (res) {
        return res.json()
    })
    .then(function (categories){
        console.log(categories)
        containerCategories.innerHTML =
            `<ul id="filters">
                <li class="button_filter">Tous</li>
            <ul>`
        for (filter in categories){
            document.getElementById("filters").innerHTML +=
            `<li class="button_filter">${categories[filter].name}</li>`
        }        
    })
}

//API WORKS

const urlWorks = "http://localhost:5678/api/works" 
const containerGallery = document.getElementById("gallery")



const getWorks = () => {
    fetch(urlWorks)
    .then(function (res) {
        return res.json()
    })
    .then(function (works){
        console.log(works)
        for (projects in works){
            containerGallery.innerHTML += 
            `<figure>
				    <img src="${works[projects].imageUrl}" alt="${works[projects].title}">
				    <figcaption>${works[projects].title}</figcaption>
			</figure>`
        }
    })
}



//LANCEMENT

getCategories()
getWorks()
