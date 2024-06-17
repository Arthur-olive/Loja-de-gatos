function generatePrice(){
    randomNumber = Math.random() * 100
    return (Math.random() * 100).toFixed(2)
}

function generateName(){
    const names = ["Cuan","Polenguinho","Polex","Fallen","Matheus","Alek","Alessandro","Cu","bebe","Alan","Zoka","Sokka"]
    randomNames = Math.floor(Math.random() * (names.length))
    return names[randomNames]
}

function generateDescription(){
    const desc = ["Branco","Preto","Gordo","Magro","Grande","Rebaixado","Cabeçudo","Orelhudo","Sem pai","Mãe abandonou","Esfomeado","Preguiçoso","Gosta de lasanha"]
    randomDesc = Math.floor(Math.random() * (desc.length))
    return desc[randomDesc]
}

async function generateImage(){
    return fetch ("https://api.thecatapi.com/v1/images/search").then(
        response => response.json()
    ).then(
        data => data[0].url
    )
}

async function placeCatCard(){

    const cardGrid = document.getElementById("cards-grid")

    const catName = generateName()
    const catDesc = generateDescription()
    const catPrice = generatePrice()
    const image = await generateImage()

    const card = `
    <div class="card">
        <img alt="gato1" src="${image}">
        <h4>Name: ${catName}</h4>
        <p class="description">${catDesc}</p>
        <div>
            <p class="price">Price: $${catPrice}</p>
        </div>
    </div>
    `

    cardGrid.innerHTML += card
}

document.addEventListener("DOMContentLoaded", async function () {
   for (let i = 0; i < 45; i++){
    placeCatCard()
   }
});