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

// COULEURS BOUTONS FILTRES

const buttonTous = document.getElementById("btnTous");
const buttonObjets = document.getElementById("btnObjets");
const buttonAppartements = document.getElementById("btnAppart");
const buttonHotelres = document.getElementById("btnHotelres");

buttonTous.addEventListener('click', function onClick(event) {
    const backgroundColor = buttonTous.style.backgroundColor;
  
    if (backgroundColor === 'white') {
        buttonTous.style.backgroundColor = '#1D6154';
        buttonTous.style.color = 'white';
        buttonObjets.style.backgroundColor = 'white';
        buttonObjets.style.color = '#1D6154';
        buttonAppartements.style.backgroundColor = 'white';
        buttonAppartements.style.color = '#1D6154';
        buttonHotelres.style.backgroundColor = 'white';
        buttonHotelres.style.color = '#1D6154';   

    }
});

buttonObjets.addEventListener('click', function onClick(event) {
    const backgroundColor = buttonObjets.style.backgroundColor;
  
    if (backgroundColor === '#1D6154') {
        buttonObjets.style.backgroundColor = 'white';


    } else {
        buttonObjets.style.backgroundColor = '#1D6154';
        buttonObjets.style.color = 'white';
        buttonTous.style.backgroundColor = 'white';
        buttonTous.style.color = '#1D6154';
        buttonAppartements.style.backgroundColor = 'white';
        buttonAppartements.style.color = '#1D6154';
        buttonHotelres.style.backgroundColor = 'white';
        buttonHotelres.style.color = '#1D6154';

    }
});

buttonAppartements.addEventListener('click', function onClick(event) {
    const backgroundColor = buttonAppartements.style.backgroundColor;
  
    if (backgroundColor === '#1D6154') {
        buttonAppartements.style.backgroundColor = 'white';
  

    } else {
        buttonAppartements.style.backgroundColor = '#1D6154';
        buttonAppartements.style.color = 'white';
        buttonTous.style.backgroundColor = 'white';
        buttonTous.style.color = '#1D6154';
        buttonObjets.style.backgroundColor = 'white';
        buttonObjets.style.color = '#1D6154';
        buttonHotelres.style.backgroundColor = 'white';
        buttonHotelres.style.color = '#1D6154';

    }
});

buttonHotelres.addEventListener('click', function onClick(event) {
    const backgroundColor = buttonHotelres.style.backgroundColor;
  
    if (backgroundColor === '#1D6154') {
        buttonHotelres.style.backgroundColor = 'white';


    } else {
        buttonHotelres.style.backgroundColor = '#1D6154';
        buttonHotelres.style.color = 'white';
        buttonTous.style.backgroundColor = 'white';
        buttonTous.style.color = '#1D6154';
        buttonObjets.style.backgroundColor = 'white';
        buttonObjets.style.color = '#1D6154';
        buttonAppartements.style.backgroundColor = 'white';
        buttonAppartements.style.color = '#1D6154';

    }
});


//LANCEMENT

getWorks()
//getWorksObjets()
//getWorksAppartements()
//getWorksHotelres()

