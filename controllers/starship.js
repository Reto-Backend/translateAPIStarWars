const { default: axios } = require('axios')
const { response, request } = require('express');
const { tranlateStarship } = require('../helpers/translate');

const getStarships = async (req, res = response) => {
    const resp = await axios('https://swapi.py4e.com/api/starships');
    const { count: cantidad, next: siguiente, previous: anterior } = resp.data;
    const mapResults = resp.data.results.map(r => {
        return tranlateStarship(r);
    });

    res.json({
        cantidad,
        siguiente,
        anterior,
        resultados: mapResults
    });
}


const getStarship = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const resp = await axios(`https://swapi.py4e.com/api/starships/${id}`);
        res.json(tranlateStarship(resp.data));
    } catch (error) {
        res.json({
            detalle: 'No encontrado'
        });
    }
}

module.exports = {
    getStarships,
    getStarship
}