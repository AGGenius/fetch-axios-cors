const infoDOM = document.getElementById('pokemonInfo');
const pokeInput = document.getElementById('pokemonName');

function getPokemonInfo() {
    const pokemonName = pokeInput.value.toLocaleLowerCase();

    fetch(`http://localhost:3000/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const {name, sprites: {front_default}, height, weight} = data; // Destructuring de datos.
        
            infoDOM.innerHTML = `
                <h2>Pokemón: ${name}</h2>
                <img src='${front_default}' alt='${name} sprite' />
                <p>Altura: ${height}</p>
                <p>Peso: ${weight/10} m</p>
            `;
        })
        .catch(error => infoDOM.innerHTML = `<p>Imposible acceder al pokemon: ${error}</p>`);
}