let arrProdutos = []
let idProdutos = 1

function getProdutos(){
	return arrProdutos;
}

function produtoById(id){
	const produto = arrProdutos.find((produto) => produto.id == id)
	return produto
}

function addProdutos(obj){
	obj.id = idProdutos

	idProdutos++

	arrProdutos.push(obj)
}

function atualizarProduto(obj){
	arrProdutos = arrProdutos.map(item => item.id == obj.id ? obj : item)
}

module.exports = { getProdutos, produtoById, addProdutos, atualizarProduto }