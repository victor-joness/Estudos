const express = require('express')
const app = express()
const port = 3000

/* Array criado na memória para fazer busca no servidor via HTTP pelo navegador */
let zoo = [{animal:"DOG", name:"Pluto"},
    {animal:"CAT", name:"Hercules"},
    {animal:"BIRD", name:"Tweety"},
    {animal:"DOG", name:"Spiff"},
    {animal:"CAT", name:"Tom"},
    {animal:"BIRD", name:"Road Runner"}]

/* Fazendo uso dos formatos de envio dos dados pelo Body da request (JSON e URL Encoded) */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* No caminho '/mirror' estou enviando dados pelo corpo da requisição (POST = enviar dados)  */
app.post('/mirror', function(req, res, next){
	console.log(req.body) // body = corpo requisição
	res.send(req.body)
})

/* Faz uma busca pelo '?name=valor' ou '?animal=valor' no caminho '/zoo' pelos parâmetros da URL e retorna ela */
app.get('/zoo', (req, res) => {
	if(req.query.name || req.query.animal){
	    buscaName = req.query.name
	    buscaAnimal = req.query.animal
	    respArray = []
	    for (let i = 0; i < zoo.length; i++) {
	      const a = zoo[i];
	      if(a.name.includes(buscaName) || a.animal.includes(buscaAnimal)){
	        respArray.push(a)        
	      }
	    }
	    res.send(respArray);
  	}else{
    	res.send(zoo);
  	}
})

/* Passando dados pela URL da aplicação com o uso de '?atributo=valor' logo após o caminho '/queryparams' */
app.get('/queryparams', (req, res) => {
  console.log(req.query); // query = recebendo da URL
  res.send(req.query);
})

/* Passando dados pela URL da requisição só que com parâmetros de caminho (':name' = dado passado pela URL) */
app.get('/pathparams/name/:name/age/:age', (req, res) => { 
  console.log(req.params);
  res.send(req.params);
})

/* Acessando a raiz da aplicação, mostrando um HTML padrão (GET = recuperar e exibir) */
app.get('/', (req, res) => {
	res.send('<h1>Bem-vindo a aplicação!</h1>')
})

/* Necessário para rodar o servidor na porta 'port' */
app.listen(port, () => {
	console.log(`Rodando o servidor na porta ${port}`)
})