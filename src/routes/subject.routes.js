const express = require('express');
const subject_model = require('../models/subject.model')
const subject_routes = express.Router()

/* Solicitudes HTTP, en total trabajaremos con 5: 
    GET: listar, no recibe parametro
    POST: crear nuevo registro, no recibe parametro 
    ------------------------------------------------------------------------
    GET{id}: ver información en detalle, recibe como parametro el id
    PUT{id}: actualizar un registro existente, recibe como parametro el id
    DELETE{id}: eliminar un registro existente, recibe como parametro el id
    
*/
subject_routes.post('/', (req, res)=>{})
subject_routes.get('/', (req, res)=>{})
subject_routes.get('/:subjectId', (req, res)=>{})
subject_routes.put('/:subjectId', (req, res)=>{})
subject_routes.delete('/:subjectId', (req, res)=>{})

module.exports = subject_routes
