//PARTIE MES PROJETS

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


const getWorksObjets = () => {
    fetch(urlWorks)
    .then(function (res) {
        return res.json()
    })
    .then(function (works){
        console.log(works)
        for (projects of filterObjets){
            console.log(projects)
            containerGallery.innerHTML += 
                `<figure>
				    <img src="${works[projects].imageUrl}" alt="${works[projects].title}">
				    <figcaption>${works[projects].title}</figcaption>
			    </figure>`
            }           
    })
}

const getWorksAppartements = () => {
    fetch(urlWorks)
    .then(function (res) {
        return res.json()
    })
    .then(function (works){
        console.log(works)
        for (projects of filterAppartements){
            console.log(projects)
            containerGallery.innerHTML += 
                `<figure>
				    <img src="${works[projects].imageUrl}" alt="${works[projects].title}">
				    <figcaption>${works[projects].title}</figcaption>
			    </figure>`
            }           
    })
}

const getWorksHotelres = () => {
    fetch(urlWorks)
    .then(function (res) {
        return res.json()
    })
    .then(function (works){
        console.log(works)
        for (projects of filterHotelres){
            console.log(projects)
            containerGallery.innerHTML += 
                `<figure>
				    <img src="${works[projects].imageUrl}" alt="${works[projects].title}">
				    <figcaption>${works[projects].title}</figcaption>
			    </figure>`
            }           
    })
}




//FILTRES

const filterTous = new Set([0,1,2,3,4,5,6,7,8,9,10]);
const filterObjets = new Set([0,4]);
const filterAppartements = new Set([1,3,5,6,7,8]);
const filterHotelres = new Set([2,9,10]);



//LANCEMENT

getWorks()
//getWorksObjets()
//getWorksAppartements()
//getWorksHotelres()

