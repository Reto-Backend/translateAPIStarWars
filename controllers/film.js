const { default: axios } = require('axios')
const { response, request } = require('express');
const { translateFilm } = require('../helpers/translate');

const getPeliculas = async (req, res = response) => {
    const resp = await axios('https://swapi.py4e.com/api/films');
    const { count: cantidad, next: siguiente, previous: anterior } = resp.data;
    const mapResults = resp.data.results.map(r => {
        return translateFilm(r);
    });

    res.json({
        cantidad,
        siguiente,
        anterior,
        resultados: mapResults
    });
}


const getPelicula = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const resp = await axios(`https://swapi.py4e.com/api/films/${id}`);
        res.json(translateFilm(resp.data));
    } catch (error) {
        res.json({
            detalle: 'No encontrado'
        });
    }
}

module.exports = {
    getPeliculas,
    getPelicula
}