## Repositorio onde eu irei guarda os arquivos e as anotações de cursos de react do Vinicius Dacal

<h4>Curso De React Vinicius Dacal (https://www.youtube.com/c/ViniciusDacal)</h4>

## Considerações iniciais:
    -> expectativa:

    -> Todos os NodeModules dos dias foram apagados após o uploud dos arquivos no github, para fazer a aplicação funcionar, der um 
    comando no diretorio matriz -> yarn install ou npm install <- e logo depois um yarn start no diretorio matriz.

## Considerações finais:
    -> Conclusão:

## Dia 01:                                                                     
    -> Hoje aprendir conceitos de this.state e this.setState tudo isso combinado com o uso de class em Js, do qual pretendo passar para
    TypeScript depois, alem disso o nome de class em react sendo da forma className, aprendi o uso de comandos lógicos no meio do html,
    algo que eu não tinha visto antes, oque me abriu um grande horizonte no uso do react.
        (Pontos Chaves):
            - Classes : constructor, metodos, etcs.
            - This.State.
            - This.setState.
            - Comandos Lógicos dentro do html.
            - Operação ternaria.
## Dia 02:                                                                   
    ->Hoje aprendir conceitos de components, states, hooks, props, alem disso fazendo o uso das mesmas caracteristicas da aula anterior
    só que agora com o uso de funções no lugar de classes, algo que eu achei bem legal, mesmo acreditando que o uso de poo em projetos 
    maiores seja mais benefico ao projeto final.
        (Pontos Chaves):
            - Funções.
            - useState: const e setConst.
            - Comandos lógicos dentro do html.
            - Operação com o uso do && para fazer a renderização de html.
## Dia 03:
    -> Hoje iniciamos o projeto e criamos um primeiro componente chamado PromotionCard, ele é bem especifico e por isso criamos ele 
    isoladamente, assim como é o objetivo do react, isolamento e reaproveitamente, separamos eles por pasta e definimos seu nome de 
    acordo com os mesmo, aprendemos a passar uma props como paramentro pro componente e assim acessa-lo pelo propio componente, criei 
    minha const promotion e definir seus valores padroes e passei ele como uma props, depois passei ele como uma props e acessei os
    valores dentro do meu componente, assim criei a estrutura html e fui definindo os valores padroes seguindo props.pai.valor, logo
    depois aprendemos sobre conditionalHandle, para fazer a seleção do primeiro comentario, onde eu faço a verificação se tem comen
    tarios no meu objeto e em seguida se for true eu renderizo um bloco que é o primeiro comentario com o uso do [0],logo depois ter
    minamos nossa estrutura, passando todos os dados pre-definidos, isso por conta da gente já saber qual é o formato e como vai vim
    os dados, pra posteiormente só integrar com a api, depois fazemos um css global e um css local pra o component.
        (Pontos chaves):
            -Inicio do projeto
            -Vamos aprender gerenciamento de rotas, de estados, listagem e integração com apis.
            -Vamos aprender a fazer modal em react, infinite loader, infinite scroll.
            -vamos aprender a fazer o Cadastro de produtos.
            -criação do component PromotionCard e sua estilização.

## Dia 04:
    -> Hoje aprendi sobre Absolute import, e os conceitos do react router dom, quando foi usado no curso estava na versão 5.2 e 
    agora já estamos na versão 6, ou seja toda a sintaxe mudou, porem com uma rapida pesquisa eu conseguir arrumar sem problemas e
    aprendi muito com isso, aprendemos tambem como extrair informações da irl, atraves do Hooks UseParams, o qual é bem util pra fins
    de banco de dados, ids , etc.
    
    jogamos fora a parte de app do arquivo e passamos a chamalo de root, onde será realmente o coração e os diretorios das páginas.
        (Pontos chaves):
            -UseParams();
            -Import Absoluto.
            -Gerenciamento de rotas com o React-Router-dom.
            -extrair informações de rotas.
            
## Dia 05:
    -> Hoje aprendi a fazer uma api interna, ou seja no local host, usando o axios para fazer os request, usamso a lib json-server 
    que simula um banco de dados, apenas para mandar as infos, vim que podemos fazer o modelo relacional na propia json, atraves da
    api a gente faz o request, logo trabalhamos com async e await, ou seja promises, porem nesse caso usamos apenas um .then() para
    vereficar se temos resposta da api. aprendi a usar useEffect, e como fazer-lo para execultar 1 unica vez, quando o componente é
    renderizado. aprendi a passar os dados da api e salvalos em uma variavel.
    traves do useStates(), e com isso podemos usar o .map() para varrer todo o array que usamos o .set() do useState, fazendo toda
    a varredura do array, podemos passar cada elento dentro do nosso componente promotion card e por consequencia ele irar renderizar
    tudo na tela. fiz algumas mudanças no css tambem, para ficar mais agradavel a exibição.
        (Pontos chaves):
            -useEffect(), useState();
            -axios.
            -Promises, request, async, await, then.
            -passar dados de array para um component e o component renderizar todos.
            -.map(), .reduce(), .filter();
            -bando de dados local com o json-server.

## Dia 06:
    ->Hoje aprendi como apresentar diferentes estados se a gente tem os dados ou não, aprendi a fazer capsular ainda mais os componen
    tes no react, aprendi como fazer o link direto em outra rota atarves do Link -> react-router-dom, aprendi como funciona a parte de
    busca no json.serve, aprendi que o use effect recebe um segundo parametro e toda vez que o valor do sengundo parametro muda, ele 
    execulta novamente o useEffect, aprendi tbm o metodo _link que é basicamente um .includes.tolowercase do Javascript nativo, funci
    ona mt bem. aprendi que devemos definir estilos css globais, tais como centralização, grids, buttons, e passamos eles como tags e
    dentro da tag o conteudo que queremos estilizar, ex: <centralizar>Meu componente</centralizar>;
        (Pontos chaves):
            -useEffect(), useState();
            -axios.
            -Encapsulamento.
            -Método de pesquisa com json.serve e useEffect + onchange.
            -método _link.
            -Extensões de react no chrome
## Dia 07:
        (Pontos chaves):
            -useEffect(), useState();
            -axios.
            -Encapsulamento.
            -Método de pesquisa com json.serve e useEffect + onchange.
            -método _link.
            -Extensões de react no chrome
## Dia 08:
        (Pontos chaves):
            -useEffect(), useState();
            -axios.
            -Encapsulamento.
            -Método de pesquisa com json.serve e useEffect + onchange.
            -método _link.
            -Extensões de react no chrome
