const express = require('express')
const app = express()
const port = 3000

const BDCategorias = require("./views/Repository/Categoria");
const BDProdutos = require("./views/Repository/Produtos")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('index', { categorias: 'categorias', produtos: 'produtos' });
})

app.get('/categorias', (req, res) => {
	res.render('categorias', { bdCategoria: BDCategorias.getCategoria() })
})

app.get('/produtos', (req, res) => {
	res.render('produtos', { bdProdutos: BDProdutos.getProdutos() })
})

app.get('/produtos-adicionar', (req, res) => {
	res.render('produtoForm', { categorias: BDCategorias.getCategoria() })
})

app.post('/produto-salvar', (req, res) => {
	let objBody = req.body

	objBody.categoria = BDCategorias.getCategoria().find((categoria) => categoria.chave === objBody.categoria)

	BDProdutos.addProdutos(objBody)

	res.redirect('produtos')
})

app.get('/produto-form-editar', (req, res) => {
	res.render('produtoFormEditar', {
		bdCategorias: BDCategorias.getCategoria(),
		produto: BDProdutos.produtoById(req.query.id)
	})
})

app.post('/produto-editar', (req, res) => {
	let objBody = req.body

	objBody.categoria = BDCategorias.getCategoria().find((categoria) => categoria.chave === objBody.categoria)

	BDProdutos.atualizarProduto(objBody)

	res.redirect('produtos')
})

app.post('/categoria-salvar', (req, res) => {
	BDCategorias.addCategoria(req.body);

	res.redirect('categorias');
})

app.get('/categoria-deletar', (req, res) => {
	let chave = req.query.chave

	BDCategorias.deletarCategoria(chave);

	res.redirect('categorias');
})

app.get('/produtos', (req, res) => {
	res.render('produtos', {})
})

app.listen(port, () => {
	console.log(`Rodando o servidor na porta ${port}`)
})