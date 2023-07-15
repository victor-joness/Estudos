const express = require('express')
const app = express()
const port = 3000

let zoo = [{animal:"DOG", name:"Pluto"},
    {animal:"CAT", name:"Hercules"},
    {animal:"BIRD", name:"Tweety"},  
    {animal:"DOG", name:"Spiff"},
    {animal:"CAT", name:"Tom"},
    {animal:"BIRD", name:"Road Runner"}]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.post('/zoo', (req, resp) => {
    zoo.push(req.body)

    let tabelaHtml = "<html>"
    tabelaHtml += "<head></head>"
    tabelaHtml += "<body>"
    tabelaHtml += "<h1>Tabela de Animais</h1>"
    tabelaHtml += "<table border=1><tr><th>Nome</th><th>Animal</th></tr>";
    zoo.map((item) => { tabelaHtml += "<tr><td>" + item.name + "</td><td>" + item.animal + "</td></tr>" })
    tabelaHtml += "</table>"
    tabelaHtml += "</body>"
    tabelaHtml += "</html>"

    resp.send(tabelaHtml)
})

app.post('/mirror', function(req, res, next){
	console.log(req.body) // body = corpo requisição
	res.send(req.body)
})


app.get('/zoo', (req, res) => {
    let zoo2;
    if(req.query.name != ""){
        zoo2 = zoo.filter((item) => item.name.toLowerCase().includes(req.query.name.toLowerCase()))

        if(req.query.animal == "CAT"){
            zoo2 = zoo2.filter((item) => item.animal == "CAT" )
        }else if(req.query.animal == "DOG"){
            zoo2 = zoo2.filter((item) => item.animal == "DOG" )
        }else if(req.query.animal == "BIRD"){
            zoo2 = zoo2.filter((item) => item.animal == "BIRD" )
        }
    }else{
        if(req.query.animal == "CAT"){
            zoo2 = zoo.filter((item) => item.animal == "CAT" )
        }else if(req.query.animal == "DOG"){
            zoo2 = zoo.filter((item) => item.animal == "DOG" )
        }else if(req.query.animal == "BIRD"){
            zoo2 = zoo.filter((item) => item.animal == "BIRD" )
        }else{
            zoo2 = zoo
        }
    }


	let tabelaHtml = "<html>"
    tabelaHtml += "<head></head>"
    tabelaHtml += "<body>"
    tabelaHtml += "<h1>Tabela de Animais</h1>"
    tabelaHtml += "<table border=1><tr><th>Nome</th><th>Animal</th></tr>";
    zoo2.map((item) => { tabelaHtml += "<tr><td>" + item.name + "</td><td>" + item.animal + "</td></tr>" })
    tabelaHtml += "</table>"
    tabelaHtml += "</body>"
    tabelaHtml += "</html>"

    res.send(tabelaHtml)
})

app.get('/queryparams', (req, res) => {
  console.log(req.query); // query = recebendo da URL
  res.send(req.query);
})

app.get('/pathparams/name/:name/age/:age', (req, res) => { 
  console.log(req.params);
  res.send(req.params);
})

app.get('/', (req, res) => {
	res.send('<h1>Bem-vindo a aplicação!</h1>')
})

app.listen(port, () => {
	console.log(`Rodando o servidor na porta ${port}`)
})