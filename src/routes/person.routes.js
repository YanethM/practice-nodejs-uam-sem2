const express = require('express');
const person_model = require('../models/person.model')
const person_routes = express.Router()

/* Solicitudes HTTP, en total trabajaremos con 5: 
    GET: listar, no recibe parametro
    POST: crear nuevo registro, no recibe parametro 
    ------------------------------------------------------------------------
    GET{id}: ver información en detalle, recibe como parametro el id
    PUT{id}: actualizar un registro existente, recibe como parametro el id
    DELETE{id}: eliminar un registro existente, recibe como parametro el id
    
*/
person_routes.post('/', (req, res)=>{})
person_routes.get('/', (req, res)=>{})
person_routes.get('/:personId', (req, res)=>{})
person_routes.put('/:personId', (req, res)=>{})
person_routes.delete('/:personId', (req, res)=>{})

module.exports = person_routes
