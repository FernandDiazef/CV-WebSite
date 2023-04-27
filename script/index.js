const API = "https://api.github.com/users/FernandDiazef/repos";

const ContenedorCards = document.querySelector("#ContenedorCards");
const CreadorDeCards = (Data) => {
    let GuardarCards = "";
    Data.forEach(element => {
        let cards = `
        <div class="card text-center border border-success border-opacity-50 border-4" style="width: 18rem; margin: 10px;">
            <img src="${element.owner.avatar_url}" class="card-img-top shadow" alt="io">
            <div class="card-body bg-dark bg-opacity-50 ">
                <h5 class="card-title border-bottom border-light border-opacity-50 border-3">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <a href="${element.html_url}" target="__Blank" class="btn btn-light">Ir A Repositorio</a>
            </div>
        </div>
        `;
        GuardarCards += cards;
    });
    ContenedorCards.innerHTML = GuardarCards;
}
const fetchData = async (URL) => {
    try{

    let response = await fetch(URL);
    let data = await response.json();

    CreadorDeCards (data);

    }catch (error){
        console.log(error)
    }
}
fetchData(API,);