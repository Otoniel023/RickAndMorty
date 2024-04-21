let characters;
let id = Math.random() * 43;
let url = `https://rickandmortyapi.com/api/character?page=${id}`;


fetch(url)
 .then(response => response.json())
    .then(data => {
        characters = data.results;
    });

const StartGrild = () => LLenarDivs(); 
    function LLenarDivs() {
    let id = Math.random() * 43;
    let url = `https://rickandmortyapi.com/api/character?page=${id}`;
    fetch(url)
 .then(response => response.json())
    .then(data => {
        characters = data.results;
    });
    for (var x = 0; x < characters.length; x++) {
        var div2 = document.getElementById('personajes');
        var div = document.createElement('div');
        var cardhead = document.createElement('div');
        cardhead.className = 'card-head';
        div.className = 'card';
        var title = document.createElement('h3');
        var img = document.createElement('img');
        var status = document.createElement('p');
        var genero = document.createElement('p');
        var species = document.createElement('p');
        genero.textContent = `Genero: ${characters[x].gender}`;
        genero.className = 'card-text';
        status.textContent = `Estatus: ${characters[x].status}`;
        status.className = 'card-text';
        img.src = characters[x].image;
        img.className = 'img-fluid';
        title.textContent = characters[x].name; 
        title.className = 'card-title';
        species.textContent = `Estatus: ${characters[x].species}`;
        species.className = 'card-text';
        cardhead.appendChild(title);
        cardhead.appendChild(img);
        div.appendChild(cardhead);
        div.appendChild(genero);
        div.appendChild(status);
        div.appendChild(species);
        
        div2.append(div);
        
    }

}

let parametroDiv = x;
document.getElementById()
