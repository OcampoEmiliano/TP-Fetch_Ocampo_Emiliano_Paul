let indice= prompt("nombre o numero");// se elige el nombre o numero de pokemon

const api_url = 'https://pokeapi.co/api/v2/pokemon/';


let url = api_url+indice+"/"

fetch(url)
.then(response => response.json())
.then(data => {
    // se muestra la informacion recibida
    let html = '<h1>' + data.name + '</h1>';
    html += '<img src="' + data.sprites.front_default + '" alt="' + data.name + '">';
    html += '<p>Altura: ' + data.height + '</p>';
    html += '<p>Peso: ' + data.weight + '</p>';
    html += '<p>Experiencia base: ' + data.base_experience + '</p>';
    html += '<p>Habilidades:</p><ul>';
    for (let ability of data.abilities) {
        html += '<li>' + ability.ability.name + '</li>';
    }
    html += '</ul>';
    html += '<p>Tipos:</p><ul>';// muestra los tipos
    for (let type of data.types) {
        html += '<li>' + type.type.name + '</li>';
    }
    html += '</ul>';
    html += '<p>Estadísticas de combate:</p><ul>';// mustra las estadisticas
    for (let stat of data.stats) {
        html += '<li>' + stat.stat.name + ': ' + stat.base_stat + '</li>';
    }
    html += '</ul>';

    document.getElementById('data').innerHTML = html;
})
.catch(error => console.error('Error:', error));
