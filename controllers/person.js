const { default: axios } = require('axios')
const { response, request } = require('express');
const { translatePerson } = require('../helpers/translate');

const getPersons = async (req, res = response) => {
    const resp = await axios('https://swapi.py4e.com/api/people');
    const { count: cantidad, next: siguiente, previous: anterior } = resp.data;
    const mapResults = resp.data.results.map(r => {
        return translatePerson(r)
    });

    res.json({
        cantidad,
        siguiente,
        anterior,
        resultados: mapResults
    });
}


const getPerson = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const resp = await axios(`https://swapi.py4e.com/api/people/${id}`);

        res.json(translatePerson(resp.data));
    } catch (error) {
        res.json({
            detalle: 'No encontrado'
        });
    }
}

module.exports = {
    getPersons,
    getPerson
}