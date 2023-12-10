// Importe as dependências necessárias
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

// Middleware para ver o json da requisicao;
app.use(bodyParser.json());

// Banco de dados temporario em memoria
const users = [];
const documentos = [];

app.get("/", (req, res) => {
  res.json({ messagem: "Bem-vindo ao Web Service" });
});

// Rota para criar um novo usuario
app.post("/users", (req, res) => {
  const user = req.body;

  const userExists = users.map((user) => user.username).includes(user.username);

  if (!userExists) {
    users.push(user);
    //tenho que limpar o arquivo antes
    fs.writeFileSync('users.txt', "", 'utf-8');
    users.map((user) => {
      const userTxt = `${user.username} ${user.password}\n`;
      fs.appendFileSync('users.txt', userTxt, 'utf-8');
    });

    res.json({ messagem: "Usuário criado com sucesso" });
  } else {
    return res.json({ messagem: "Usuário já existe" });
  }
});

//Rota para listar todoss os usuarios
app.get("/users", (req, res) => {
  res.json(users);
});

// associar um usuario ao documento
app.post("/documentos/:documentoID/users", (req, res) => {
  const documentoID = req.params.documentoID;
  const { username } = req.body;
  try {
    const document = documentos.findIndex((doc) => doc.id == documentoID);
    if (document != -1) {
      const user = users.findIndex((user) => user.username == username);
      if (user != -1) {
        documentos[document].userAccess.push(username);
        documentos[document].lastUpdated = new Date();
        res.json({ messagem: "Usuário associado ao documento com sucesso" });
      } else {
        res.json({ messagem: "Usuário não encontrado" });
      }
    } else {
      res.json({ messagem: "Documento não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.json({ messagem: "Erro interno do servidor" });
  }
});

// Rota para criar um novo documento
app.post("/documentos", (req, res) => {
  const { id, title, username } = req.body;
  try {
    const document = {
      id,
      title,
      notes: [],
      lastUpdated: new Date(),
      edited: false,
      userAccess: [username],
    };

    //ver se existe o usuario e se ja existe o documento
    const userExists = users.map((user) => user.username).includes(username);
    const documentExists = documentos.some((doc) => doc.id === id);

    if (!userExists || documentExists) {
      return res.json({
        messagem: "Usuário não existe ou documento já existe",
      });
    }

    documentos.push(document);

    const filename = `${id}-${title}.txt`;
    fs.writeFileSync(filename, "", "utf-8");

    res.json({ messagem: "Documento e arquivo .txt criados com sucesso" });
  } catch (error) {
    console.error(error);
    res.json({ messagem: "Erro interno do servidor" });
  }
});

//Rota para listar todas as notas de um documento
app.get("/documentos/:documentoID/notes", (req, res) => {
  const documentoID = req.params.documentoID;
  const document = documentos.find((doc) => doc.id == documentoID);
  if (document) {
    res.json(document.notes);
  } else {
    res.json({ messagem: "Documento não encontrado" });
  }
});

// Rota para listar todos os documentos
app.get("/documentos", (req, res) => {
  res.json(documentos);
});

// Rota para criar uma nova nota em um documento
app.post("/documentos/:documentoID/notes", (req, res) => {
  const documentoID = req.params.documentoID;
  const updatedNote = req.body;

  //ver se tem o documento que eu quero criar uma nota
  const document = documentos.findIndex((doc) => doc.id == documentoID);
  if (document != -1) {
    if (documentos[document].userAccess.includes(updatedNote.username)) {
      documentos[document].notes.push(updatedNote);
      documentos[document].lastUpdated = new Date();

      //xaminho para o arquivo .txt
      const filePath = `${documentoID}-${documentos[document].title}.txt`;
      //adicionar a nota no arquivo .txt
      const noteContent = `Título: ${updatedNote.title}\nConteúdo: ${updatedNote.content}\nAutor: ${updatedNote.username}\n\n`;
      fs.appendFileSync(filePath, noteContent, "utf-8");
      res.json({
        messagem: "Nota criada e escrita no arquivo .txt com sucesso",
      });
    } else {
      res.json({ messagem: "Usuário não tem acesso ao documento" });
    }
  } else {
    res.json({ messagem: "Documento não encontrado" });
  }
});

// Rota para listar o conteudo de uma nota em um documento
app.get("/documentos/:documentoID/notes/:noteId", (req, res) => {
  const documentoID = req.params.documentoID;
  const noteId = req.params.noteId;

  const document = documentos.findIndex((doc) => doc.id == documentoID);
  if (document != -1) {
    const note = documentos[document].notes.findIndex(
      (note) => note.noteId == noteId
    );
    res.json(documentos[document].notes[note]);
  } else {
    res.json({ messagem: "Documento não encontrado" });
  }
});

// Rota para listar documentos com acesso para um usuário
app.get("/users/:username/documentos", (req, res) => {
  const username = req.params.username;

  const userExists = users.map((user) => user.username).includes(username);

  if (!userExists) {
    return res.json({ messagem: "Usuário não existe" });
  }

  try {
    const accessibledocumentos = documentos.filter((document) =>
      document.userAccess.includes(username)
    );

    //retornar apenass os titles dos documentos
    const documenttitles = accessibledocumentos.map(
      (document) => document.title
    );

    res.json({ titleDosDocumentos: documenttitles });
  } catch (error) {
    res.json({ messagem: "Erro interno do servidor" });
  }
});

// Rota para listar documentos com acesso para um usuario e que foram alterados a partir de uma data/hora
app.get("/users/:username/documentos/:date", (req, res) => {
  const username = req.params.username;
  const startDate = new Date(req.params.date);

  const userExists = users.map((user) => user.username).includes(username);

  if (!userExists) {
    return res.json({ messagem: "Usuário não existe" });
  }

  try {
    const accessibledocumentos = documentos.filter(
      (document) =>
        document.lastUpdated >= startDate &&
        document.userAccess.includes(username)
    );

    //retornar apenass os titulos dos documentos
    const documenttitles = accessibledocumentos.map(
      (document) => document.title
    );

    res.json({ titleDosDocumentos: documenttitles });
  } catch (error) {
    res.json({ messagem: "Erro interno do servidor" });
  }
});

// Rota para editar uma nota em um documento
app.put("/documentos/:documentoID/notes/:noteId", (req, res) => {
  const documentoID = req.params.documentoID;
  const { noteId, title, content, username } = req.body;

  try {
    const document = documentos.findIndex((doc) => doc.id == documentoID);
    if (document != -1) {
      if (documentos[document].userAccess.includes(username)) {
        const NotaQueVaiEditar = documentos[document].notes.filter(
          (note) => note.noteId == noteId
        );

        documentos[document].notes.filter(
          (note) => note.noteId == noteId
        )[0].title = title;
        documentos[document].notes.filter(
          (note) => note.noteId == noteId
        )[0].content = content;
        documentos[document].notes.filter(
          (note) => note.noteId == noteId
        )[0].username = username;
        documentos[document].lastUpdated = new Date();
        documentos[document].edited = true;

        if (NotaQueVaiEditar != -1) {
          const filename = `${documentoID}-${documentos[document].title}.txt`;

          fs.writeFileSync(filename, "", "utf-8");
          documentos[document].notes.map((note) => {
            const updatedContent = `Título: ${note.title}\nConteúdo: ${note.content}\nAutor: ${note.username}\n\n`;
            fs.appendFileSync(filename, updatedContent, "utf-8");
          });
          res.json({ messagem: "Nota editada com sucesso" });
        } else {
          res.json({ messagem: "Nota não encontrada" });
        }
      } else {
        res.json({ messagem: "Usuário não tem acesso ao documento" });
      }
    } else {
      res.json({ messagem: "Documento não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.json({ messagem: "Erro interno do servidor" });
  }
});

// Inicie o servidor e ja pega os usuarios predefininidos
app.listen(port, () => {
  try {
    const data = fs.readFileSync("users.txt", "utf-8");
    const linhas = data.split("\n");

    for (const linha of linhas) {
      const [usuario, senha] = linha.replace('\r', '').split(' ');
      if (usuario && senha) {
        users.push({ username: usuario, password: senha });
      }
    }
    console.log(`Servidor está em execução na porta ${port}`);
  } catch (erro) {
    console.error(
      "Erro ao ler o arquivo de usuários predefinidos: " + erro.message
    );
  }
});
