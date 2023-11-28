const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let arrCategoria = [];

const getCategoria = () => {
	return arrCategoria;
}

const addCategoria = (obj) => {
	arrCategoria.push(obj);
}

const deletarCategoria = (chave) => {
	arrCategoria = arrCategoria.filter((item) => { item.chave != chave }) // Não está filtrando

	console.log(arrCategoria)
}

module.exports = { getCategoria, addCategoria, deletarCategoria };