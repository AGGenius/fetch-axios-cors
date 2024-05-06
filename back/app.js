const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const port = 3000;
const route = '/pokemon/:pokemonName'; //Yo inclui un "/" antes de pokemon que en el video no comenta. ¿Sera necesario? --> Lo era.

app.use(cors());

app.get(route, async (req, res) => {
    const pokeName = req.params['pokemonName']; // Tambien funciona como "req.params.pokemonName"
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`; // Traemos la url y añadimos el pokemon recibido como parametro.

    try {
        const response = await axios.get(url); // Trabaja como un fetch, realizando los then de forma interna.
        const {name, sprites: {front_default}, height, weight} = response.data; // Destructuring de datos.

        res.json({name, sprites: {front_default}, height, weight}) // Nos treamos los elementos de tipo "response" como variables en formato JSON, y los convertimos JS.
    } catch (error) {
        res.status(404).json({error: `Pokemon no encontrado: ${error}`});
    }
})

app.listen(port, () => {
    console.log(`Server working at http://localhost:${port}`);
})
