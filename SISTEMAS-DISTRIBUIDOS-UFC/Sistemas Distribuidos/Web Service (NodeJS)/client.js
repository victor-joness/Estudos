const axios = require("axios");

const baseUrl = "http://localhost:3000";

// funcao para criar um novo usuario
async function CriarUsuario(username, password) {
  try {
    const response = await axios.post(`${baseUrl}/users`, {
      username,
      password,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

async function ListarUsuarios() {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// funcao para criar um novo documento
async function CriarDocumento(id, title, username) {
  try {
    const response = await axios.post(`${baseUrl}/documentos`, {
      id,
      title,
      username,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// funcao para listar todos os documentos
async function ListarTodosDocumentos() {
  try {
    const response = await axios.get(`${baseUrl}/documentos`);
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// funcao para associar um usuario a um documento
async function AssociarUserAoDocumento(documentoID, username) {
  try {
    const response = await axios.post(
      `${baseUrl}/documentos/${documentoID}/users`,
      { username }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// funcao para criar uma nova nota em um documento
async function CriarAnotacao(documentoID, noteId, title, content, username) {
  try {
    const response = await axios.post(
      `${baseUrl}/documentos/${documentoID}/notes`,
      { noteId, title, content, username }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// Listar o conteudo de uma nota
async function ListarUmaNota(documentoID, noteId) {
  try {
    const response = await axios.get(
      `${baseUrl}/documentos/${documentoID}/notes/${noteId}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

//funcao para listar todas as notas de um documento
async function ListarTodasAnotacoesDeUmDocumento(documentoID) {
  try {
    const response = await axios.get(
      `${baseUrl}/documentos/${documentoID}/notes`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// funcao para associar um usuario a um documento
async function AssociarUserAoDocumento(documentoID, username) {
  try {
    const response = await axios.post(
      `${baseUrl}/documentos/${documentoID}/users`,
      { username }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// funcao para listar documentos com acesso para um usuario
async function ListarDocumentoDoUsuario(username) {
  try {
    const response = await axios.get(`${baseUrl}/users/${username}/documentos`);
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

//funcao para listar documentos com acesso para um usuario e que foram alterados a partir de uma data/hora
async function ListarDocumentoDoUsuarioApartirDaData(username, date) {
  try {
    const response = await axios.get(
      `${baseUrl}/users/${username}/documentos/${date}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

//funcao para editar uma nota
async function EditarNota(documentoID, noteId, title, content, username) {
  try {
    const response = await axios.put(
      `${baseUrl}/documentos/${documentoID}/notes/${title}`,
      { noteId, title, content, username }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

//criando o primeiro usuario do sistema
/* CriarUsuario("Pedro", "123"); */

//listagem de usuarios do sistema
/* ListarUsuarios(); */

//criação de um documento
/* CriarDocumento(1,'documento1', 'Victor'); */

//listagem de documentos do sistema
/* ListarTodosDocumentos(); */

//criação de uma nota em um documento
/* CriarAnotacao(2,1,'anotação 01','conteudo da anotação 1 no documento1', 'Victor');
CriarAnotacao(2,2,'anotação 02','conteudo da anotação 2 no documento1', 'Victor'); */

//listar o conteudo de uma nota
/* ListarUmaNota(1,2); */

//Listar o conteúdo de um documento (todas as notas);
/* ListarTodasAnotacoesDeUmDocumento(2); */

//Associar outro usuario ao documento
/* AssociarUserAoDocumento(1, 'Joao'); */

//Editar uma nota em um documento
/* EditarNota(2,2, 'anotação editada numero2', 'conteudo da anotação 2 no documento1 so que foi editado', 'Victor'); */

// listar documentos com acesso para um usuario
/* ListarDocumentoDoUsuario('Joao'); */

// listar documentos com acesso para um usuario e que foram alterados a partir de uma data/hora
// ta no horario de greenwich +3 horas
/* ListarDocumentoDoUsuarioApartirDaData('Victor', '2023-11-04T18:02:00.000Z'); */

/*
1. Criar um documento;          OK
2. Criar uma nota em um documento;           OK
3. Editar uma nota em um documento;           OK
4. Listar o conteúdo de uma nota;             OK
5. Listar o conteúdo de um documento (todas as notas);      OK
6. Apresentar detalhes sobre um documento: título, última alteração, usuarios com acesso,
títulos das notas e indicação se há algum usuario editando alguma nota no momento.   OK
7. Listar usuarios existentes no servidor;          OK
8. Associar um outro usuario ao documento;        OK
9. Listar documentos que têm acesso apresentando o título de cada documento;  OK
10. Listar documentos que têm acesso e que foram alterados a partir de uma data/hora. OK
*/
