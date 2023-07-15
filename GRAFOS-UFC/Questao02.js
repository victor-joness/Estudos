class Digrafo {
    constructor(vertices) {
      this.V = vertices;
      this.grafo = {};
    }
  
    adicionarAresta(u, v, peso) {
      if (!this.grafo[u]) {
        this.grafo[u] = [];
      }
      this.grafo[u].push({ v, peso });
    }
  
    bellmanFord(origem) {
      let dist = {};
      let antecessor = {};
  
      dist[origem] = 0;
  
      for (let i = 1; i < this.V - 1; i++) {
        for (let u in this.grafo) {
          if (dist[u] !== undefined) {
            for (let j = 0; j < this.grafo[u].length; j++) {
              let { v, peso } = this.grafo[u][j];
              if (dist[v] === undefined || dist[u] + peso < dist[v]) {
                dist[v] = dist[u] + peso;
                antecessor[v] = u;
              }
            }
          }
        }
      }
  
      let destino = Object.keys(dist).reduce((a, b) => (dist[a] > dist[b] ? a : b));
  
      // Verifica se há ciclos de peso negativo
      for (let u in this.grafo) {
        if (dist[u] !== undefined) {
          for (let j = 0; j < this.grafo[u].length; j++) {
            let { v, peso } = this.grafo[u][j];
            if (dist[u] + peso < dist[v]) {
              console.log("O dígrafo contém ciclos de peso negativo.");
              return;
            }
          }
        }
      }
  
      // Constrói o caminho do diâmetro
      let caminho = [];
      let v = destino;
      while (v !== undefined) {
        caminho.unshift(v);
        v = antecessor[v];
      }
  
      return { diametro: dist[destino], caminho };
    }
  }
  
  // Exemplo de uso
  let digrafo = new Digrafo(9);
  digrafo.adicionarAresta(0, 1, 2);
  digrafo.adicionarAresta(0, 2, 3);

  digrafo.adicionarAresta(1, 3, 3);
  digrafo.adicionarAresta(1, 2, 4);

  digrafo.adicionarAresta(2, 4, 2);
  digrafo.adicionarAresta(2, 1, 1);

  digrafo.adicionarAresta(3, 5, 4);

  digrafo.adicionarAresta(4, 5, 1);

  digrafo.adicionarAresta(5, 6, 5);
  
  let { diametro, caminho } = digrafo.bellmanFord(6);
  console.log("Diâmetro:", diametro);
  console.log("Caminho do diâmetro:", caminho);
  