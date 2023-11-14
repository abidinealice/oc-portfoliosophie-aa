const url = "http://localhost:5678/api/works"
const container = document.getElementById("portfolio")


const getData = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data){
        console.log(data)
    })
}

getData()