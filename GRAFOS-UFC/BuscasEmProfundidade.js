//Uma limitação deste algoritmo é a performance. Como o DFS precisa de um nodo raiz, é necessário rodar o DFS pra cada nodo presente no grafo.

//vamos explorar todos os vértices e arestas do grafo a partir de um vértice inicial, seguindo um caminho até encontrar um vértice 
//já visitado que não seja o vértice pai. Se isso acontecer, significa que há um ciclo no grafo.

function possuiCiclo(grafo) {
    // Obtém todos os vértices do grafo
    const vertices = Object.keys(grafo);
    /* console.log(vertices) */
    const visitados = {};
    //possuiCiclo começa como falso
    let possuiCiclo = false;
  
    //Verifica todos os vértices do grafo
    for (let i = 0; i < vertices.length; i++) {
      const vertice = vertices[i];
  
      // Verifica se o vértice já foi visitado
      if (!visitados[vertice]) {
        // Chama a função dfs para fazer a busca em profundidade a partir do vértice atual
        if (dfs(grafo, vertice, null, visitados)) {
          // Se a função dfs retornar true, significa que um ciclo foi encontrado
          possuiCiclo = true;
          break; //break no for, pois não é necessário verificar os outros vértices
        }
      }
      /* console.log(vertice); */
      //caso não encontre um ciclo, retorna falso e vai para o proximo vertice;
    }
  
    return possuiCiclo;
  }
  
  function dfs(grafo, vertice, verticePai, visitados) {
    // Marca o vértice atual como visitado
    visitados[vertice] = true;
    console.log(visitados)
    // Pega os vizinhos do vértice atual
    const vizinhos = grafo[vertice];
    /* console.log(vizinhos); */
    
    for (let i = 0; i < vizinhos.length; i++) {
      const vizinho = vizinhos[i];
      console.log(vizinhos)
       // Verifica se o vizinho não foi visitado
      if (!visitados[vizinho]) {
        // Chama a função dfs recursivamente para ver o vizinho
        if (dfs(grafo, vizinho, vertice, visitados)) {
          // Se a função dfs retornar true, significa que um ciclo foi encontrado
          return true;
        }
      } else if (vizinho !== verticePai) {
        // Verifica se o vizinho já foi visitado e não é o vértice pai
        // Se isso ocorrer, significa que um ciclo foi encontrado
        return true;
      }
    }
  
    /* console.log(vizinhos) */
    // Retorna false se nenhum ciclo foi encontrado a partir do vértice atual
    return false;
  }

  let grafo = {
    2: ["7", "4"],
    3: ["5", "8"],
    4: ["7", "2"],
    5: ["3", "7"],
    7: ["5", "4", "2"],
    8: ["3"],
  };

  console.log(possuiCiclo(grafo));