const url = "http://localhost:5678/api/works" 
const containerGallery = document.getElementById("gallery")


const getWorks = () => {
    fetch(url)
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

getWorks()
