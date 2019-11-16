const btn = document.querySelector("#btn-s");
const dataIn = document.querySelector("#data");
const cont = document.querySelector("#contenedor");

btn.addEventListener('click', ()=>{
    const uri = 'https://rickandmortyapi.com/api/character/';
    fetch(uri).
        then(res => res.json())
        .then(data => {
            // console.log(data.results);
            for(let i=0; i<20; i++ ){
                cont.innerHTML += `<div class="cardPersonaje">
                                    <div class="cardImg">
                                        <img src="${data.results[i].image}">
                                    </div><br>
                                    <div class="cardDescription">
                                        <p id="nombre">Name: ${data.results[i].name}</p><br>
                                        <p id="especie">Especie: ${data.results[i].species}</p><br>
                                        <p id="status">Estatus: ${data.results[i].status}</p>
                                    </div>
                                </div>`;
            }
        })
});