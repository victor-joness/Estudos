const readline = require("readline");

function Estado(nome) {
  return { nome };
}

function Simbolo(valor) {
  return { valor };
}

function Fita(conteudo) {
  return { conteudo, cabeca: 1,
    lerSimboloAtual() {
      return this.conteudo[this.cabeca].valor;
    },
    escreverSimbolo(simbolo) {
      this.conteudo[this.cabeca].valor = simbolo;
    },
    moverEsquerda() {
      if (this.cabeca > 0) {
        this.cabeca--;
      }
    },
    moverDireita() {
      this.cabeca++;
      if (this.cabeca >= this.conteudo.length) {
        this.conteudo.push(Simbolo("⊔")); // espaço em branco para direita
      }
    }
  };
}

function Configuracao(estado, fita) {
  return { estado, fita };
}

function Transicao(estadoAtual, simboloLido, novoEstado, acao) {
  return { estadoAtual, simboloLido, novoEstado, acao };
}

function MaquinaTuring(estados, alfabeto, transicoes, estadoInicial, estadosFinais) {
  return { estados, alfabeto, transicoes, estadoInicial, estadosFinais,
    aplicarTransicao(configuracao) {
      const estadoAtual = configuracao.estado.nome;
      const simboloLido = configuracao.fita.lerSimboloAtual();

      // procurar a transição
      const transicao = this.transicoes.find((transicao) => transicao.estadoAtual.nome === estadoAtual && transicao.simboloLido.valor === simboloLido);

      // se encontrou uma transição
      if (transicao) {
        // vai para o novo estado
        configuracao.estado = transicao.novoEstado;

        // executa uma ação 
        if (transicao.acao.tipo === "escrever") {
          configuracao.fita.escreverSimbolo(transicao.acao.valor);
        } else if (transicao.acao.tipo === "mover") {
          if (transicao.acao.direcao === "esquerda") {
            configuracao.fita.moverEsquerda();
          } else if (transicao.acao.direcao === "direita") {
            configuracao.fita.moverDireita();
          }
        }
        return true;
      } else {
        return false;
      }
    },
    estaEmEstadoFinal(estado) {
      return this.estadosFinais.some((e) => e.nome === estado.nome);
    }
  };
}

function inicializarFita(conteudo) {
  const fitaArray = conteudo.split("").map((char) => Simbolo(char));
  return Fita(fitaArray);
}

function executarAlgoritmo(mt, entrada, limiteTransicoes, visualizarTodasConfiguracoes) {
  const fita = inicializarFita(entrada);
  const configuracaoInicial = Configuracao(mt.estadoInicial, fita);
  let configuracaoAtual = configuracaoInicial;
  let parada = false;
  const configuracoes = [];
  let contadorTransicoes = 0;

  //enquanto não for parada e nao ultrapassar o limite de transições
  while (!parada && contadorTransicoes < limiteTransicoes) {
    //console.log("configuração atual:", configuracaoAtual);
    if (visualizarTodasConfiguracoes) {
      configuracoes.push(
        `(${configuracaoAtual.estado.nome}, ${configuracaoAtual.fita.conteudo
          .map((s, index) =>
            index === configuracaoAtual.fita.cabeca ? `>${s.valor}<` : s.valor
          )
          .join("")}, ${configuracaoAtual.fita.cabeca})`
      );
    }

    if (mt.estaEmEstadoFinal(configuracaoAtual.estado)) {
      parada = true;
    } else {
      const transicaoAplicada = mt.aplicarTransicao(configuracaoAtual);
      if (!transicaoAplicada) {
        parada = true;
      }
    }
    contadorTransicoes++;
  }

  // pegar todas as configuração pq saiu do while e imprime
  if (visualizarTodasConfiguracoes) {
    //console.log("configurações depois do while:", configuracoes);
    console.log("configuraçoes:");
    configuracoes.map((config) => console.log(config));
  }

  if (!mt.estaEmEstadoFinal(configuracaoAtual.estado)) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `não atingiu configuração de parada apos ${limiteTransicoes} transiçoes. deseja continuar? (s/n): `,
      (opcao) => {
        rl.close();
        if (opcao.toLowerCase() === "s") {
          const limite = limiteTransicoes * 2;
          executarAlgoritmo(mt, entrada, limite, visualizarTodasConfiguracoes);
        }
      }
    );
  } else {
    console.log(`configuração de parada: (${configuracaoAtual.estado.nome}, ${configuracaoAtual.fita.conteudo.map(
      (s, index) => index === configuracaoAtual.fita.cabeca ? `>${s.valor}<` : s.valor).join("")}, ${configuracaoAtual.fita.cabeca})`);
  }
}

//teste questao 1 da lista
const q0 = Estado("q0");
const q1 = Estado("q1");
const qh = Estado("qh");

const estados = [q0, q1, qh];
const alfabetoFita = ["a", "b", "⊳", "⊔"].map((char) => Simbolo(char));
const transicoes = [
  Transicao(q0, Simbolo("a"), q1, { tipo: "escrever", valor: "b" }),
  Transicao(q0, Simbolo("b"), q1, { tipo: "escrever", valor: "a" }),
  Transicao(q0, Simbolo("⊔"), qh, { tipo: "escrever", valor: "⊔" }),
  Transicao(q0, Simbolo("⊳"), q0, { tipo: "mover", direcao: "direita" }),

  Transicao(q1, Simbolo("a"), q0, { tipo: "mover", direcao: "direita" }),
  Transicao(q1, Simbolo("b"), q0, { tipo: "mover", direcao: "direita" }),
  Transicao(q1, Simbolo("⊔"), q0, { tipo: "mover", direcao: "direita" }),
  Transicao(q1, Simbolo("⊳"), q1, { tipo: "mover", direcao: "direita" }),
];
const estadoInicial = q0;
const estadosFinais = [qh];

const mt = MaquinaTuring( estados, alfabetoFita, transicoes, estadoInicial, estadosFinais );
executarAlgoritmo(mt, "⊳aabbba", 20, true);

/* // Teste questão 2 da lista
const q0 = Estado("q0");
const q1 = Estado("q1");
const q2 = Estado("q2");
const qh = Estado("qh");

const estados = [q0, q1, q2, qh];
const alfabetoFita = ["a", "b", "⊳", "⊔"].map((char) => Simbolo(char));
const transicoes = [
  Transicao(q0, Simbolo("a"), q1, { tipo: "mover", direcao: "esquerda" }),
  Transicao(q0, Simbolo("b"), q0, { tipo: "mover", direcao: "direita" }),
  Transicao(q0, Simbolo("⊔"), q0, { tipo: "mover", direcao: "direita" }),
  Transicao(q0, Simbolo("⊳"), q0, { tipo: "mover", direcao: "direita" }),

  Transicao(q1, Simbolo("a"), q1, { tipo: "mover", direcao: "esquerda" }),
  Transicao(q1, Simbolo("b"), q2, { tipo: "mover", direcao: "direita" }),
  Transicao(q1, Simbolo("⊔"), q1, { tipo: "mover", direcao: "esquerda" }),
  Transicao(q1, Simbolo("⊳"), q1, { tipo: "mover", direcao: "direita" }),

  Transicao(q2, Simbolo("a"), q2, { tipo: "mover", direcao: "direita" }),
  Transicao(q2, Simbolo("b"), q2, { tipo: "mover", direcao: "direita" }),
  Transicao(q2, Simbolo("⊔"), qh, { tipo: "escrever", valor: "⊔" }),
  Transicao(q2, Simbolo("⊳"), q2, { tipo: "mover", direcao: "direita" }),
];

const estadoInicial = q0;
const estadosFinais = [qh];

const mt = MaquinaTuring(estados, alfabetoFita, transicoes, estadoInicial, estadosFinais);
executarAlgoritmo(mt, "⊳abb⊔bb⊔⊔⊔aba", 20, true); */
