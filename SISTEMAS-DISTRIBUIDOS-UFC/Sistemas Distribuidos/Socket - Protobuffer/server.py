import socket
import threading
from datetime import datetime

# Dicionário para armazenar dados simulados do servidor
data_store = {
    "documentos": {},
    "usuarios": {}
}

with open('users.txt', 'r') as arquivo:
    for linha in arquivo:
        nome, user_id, senha = linha.strip().split()
        data_store["usuarios"][user_id] = {"nome": nome, "id": user_id, "password": senha}

#FEITO
def criar_usuario(data_store, id_usuario, password, nome):
    while id_usuario in data_store["usuarios"]:
        id_usuario = str(int(id_usuario) + 1)
    
    novo_usuario = {"id": id_usuario, "nome": nome, "password": password}
    data_store["usuarios"][id_usuario] = novo_usuario
    return f"Usuário adicionado com sucesso! ID: {id_usuario}"

#FEITO
def criar_documento(data_store, id_documento ,id_usuario, titulo):
    if id_usuario not in data_store["usuarios"]:
        return f"mensagem: Usuário não existe"

    if id_documento in data_store["documentos"]:
        return f"mensagem: Documento com esse id já existe"

    documento = {
        "id": id_documento,
        "titulo": titulo,
        "notas": [],
        "ultima_alteracao": datetime.now(),
        "editado": False,
        "usuarios_com_acesso": [id_usuario],
    }

    data_store["documentos"][id_documento] = documento

    filename = f"{id_documento}-{titulo}.txt"
    with open(filename, "w", encoding="utf-8"):
        pass

    return f"Mensagem: Documento e arquivo .txt criados com sucesso"

#FEITO
def listar_documentos(data_store):
    documentos_listados = []
    for documento_id, documento_info in data_store["documentos"].items():
        documentos_listados.append({
            "id": documento_id,
            "titulo": documento_info["titulo"],
            "notas": documento_info["notas"],
            "ultima_alteracao": documento_info["ultima_alteracao"].strftime("%Y-%m-%d %H:%M:%S"),
            "usuarios_com_acesso": documento_info["usuarios_com_acesso"],
            "editado": documento_info["editado"],
        })
    return f"documentos: {documentos_listados}"

#FEITO
def criar_nota(data_store, id_nota, id_documento, id_autor, titulo_nota, conteudo_nota):
    if id_autor not in data_store["usuarios"]:
        return f"mensagem: Usuário não existe"

    if id_documento not in data_store["documentos"]:
        return f"mensagem: Documento não encontrado"
    
    if id_autor not in data_store["documentos"][id_documento]["usuarios_com_acesso"]:
        return "mensagem: Usuário não tem acesso ao documento"

    nova_nota = {
        "id": id_nota,
        "titulo": titulo_nota,
        "conteudo": conteudo_nota,
        "autor": id_autor
    }

    data_store["documentos"][id_documento]["notas"].append(nova_nota)
    data_store["documentos"][id_documento]["ultima_alteracao"] = datetime.now()

    # Caminho para o arquivo .txt
    filename = f"{id_documento}-{data_store['documentos'][id_documento]['titulo']}.txt"
    
    # Adiciona a nota no arquivo .txt
    note_content = f"Id:{id_nota}\nTítulo: {titulo_nota}\nConteúdo: {conteudo_nota}\nAutor: {id_autor}\n\n"
    
    with open(filename, "a", encoding="utf-8") as file:
        file.write(note_content)

    return f"mensagem: Nota criada e escrita no arquivo .txt com sucesso"

#FEITO
def editar_nota(data_store, id_documento, id_nota, id_autor, novo_titulo, novo_conteudo):
    if id_autor not in data_store["usuarios"]:
        return f"mensagem: Usuário não existe"

    if id_documento not in data_store["documentos"]:
        return f"mensagem: Documento não encontrado"
    
    if id_autor not in data_store["documentos"][id_documento]["usuarios_com_acesso"]:
        return "mensagem: Usuário não tem acesso ao documento"
    
    for notas in data_store["documentos"][id_documento]["notas"]:
        if notas["id"] == id_nota:
            notas["titulo"] = novo_titulo
            notas["conteudo"] = novo_conteudo
            notas["autor"] = id_autor
            
            data_store["documentos"][id_documento]["ultima_alteracao"] = datetime.now()
            data_store["documentos"][id_documento]["editado"] = True
            
            filename = f"{id_documento}-{data_store['documentos'][id_documento]['titulo']}.txt"
            with open(filename, "w", encoding="utf-8") as file:
                file.write("")
            
            for notas in data_store["documentos"][id_documento]["notas"]:
                filename = f"{id_documento}-{data_store['documentos'][id_documento]['titulo']}.txt"

                notaId = notas["id"]
                notaTitulo = notas["titulo"]
                notaConteudo = notas["conteudo"]
                notaAutor = notas["autor"]
                note_content = f"Id:{notaId}\nTítulo: {notaTitulo}\nConteúdo: {notaConteudo}\nAutor: {notaAutor}\n\n"

                with open(filename, "a", encoding="utf-8") as file:
                    file.write(note_content)

            return f"Modificada -> ID: {id_nota}, Titulo: {novo_titulo}, Conteudo: {novo_conteudo}, Autor: {id_autor}"

    return f"Nota não encontrada."

#FEITO
def listar_conteudo_nota(data_store, id_documento, id_nota):
    if id_documento not in data_store["documentos"]:
        return f"mensagem: Documento não encontrado"

    for notas in data_store["documentos"][id_documento]["notas"]:
        if notas["id"] == id_nota:
            notaId = notas["id"]
            notaTitulo = notas["titulo"]
            notaConteudo = notas["conteudo"]
            notaAutor = notas["autor"]
            return f"ID: {notaId}, Titulo: {notaTitulo}, Conteudo: {notaConteudo}, Autor: {notaAutor}"

    return f"Nota não encontrados."

#FEITO
def listar_conteudo_documento(data_store, id_documento):
    if id_documento not in data_store["documentos"]:
        return f"mensagem: Documento não encontrado"

    notas = data_store["documentos"][id_documento]["notas"]
    return f"Notas: {notas}"

#FEITO
def detalhes_documento(data_store, id_documento):
    if id_documento not in data_store["documentos"]:
        return f"mensagem: Documento não encontrado"
    else:
        documento = data_store["documentos"][id_documento]
        return f"Id: {documento['id']}\nTítulo: {documento['titulo']}\nNotas: {documento['notas']}\nÚltima Alteração: {documento['ultima_alteracao']}\nUsuários com Acesso: {documento['usuarios_com_acesso']}\nEditado: {documento['editado']}"

#FEITO
def listar_usuarios(data_store):
    usuarios = data_store["usuarios"]

    if(len(usuarios) == 0):
        return f"[]"
    else:
        return "\n".join([f"ID: {usuario['id']}, Nome: {usuario['nome']}, Password: {usuario['password']}" for usuario in data_store["usuarios"].values()])

#FEITO
def associar_usuario_documento(data_store, id_usuario, id_documento):
    if id_usuario not in data_store["usuarios"]:
        return f"mensagem: Usuário não existe"

    if id_documento not in data_store["documentos"]:
        return f"mensagem: Documento não existe"

    if id_usuario not in data_store["documentos"][id_documento]["usuarios_com_acesso"]:
        data_store["documentos"][id_documento]["ultima_alteracao"] = datetime.now()
        data_store["documentos"][id_documento]["usuarios_com_acesso"].append(id_usuario)
        return f"mensagem: Usuário {id_usuario} associado ao documento {id_documento}"
    else:
        return f"mensagem: Usuário {id_usuario} já tem acesso ao documento {id_documento}"

#FEITO
def listar_documentos_acesso(data_store, id_usuario):
    if id_usuario not in data_store["usuarios"]:
        return f"mensagem: Usuário não existe"
    
    documentos_acesso = []
    
    for documento in data_store["documentos"].values():
        if id_usuario in documento["usuarios_com_acesso"]:
            documentos_acesso.append(documento["titulo"])
    return f"mensagem: {documentos_acesso}"

#FEITO
def listar_documentos_alterados(data_store, id_usuario, data_hora):
    if id_usuario not in data_store["usuarios"]:
        return f"Usuário não existe"
    
    documentos_alterados = []
    
    documentos_alterados.append([documento["titulo"] for documento in data_store["documentos"].values() if documento["ultima_alteracao"] > datetime.strptime(data_hora, "%Y-%m-%d %H:%M:%S") and id_usuario in documento["usuarios_com_acesso"]])
    return f"{documentos_alterados}"

def handle_client(client_socket, address, data_store):
    print(f"Conexão estabelecida com {address}")

    while True:
        data = client_socket.recv(1024).decode()

        if not data:
            break

        # Decodifica a mensagem recebida do cliente e executa a operação correspondente
        parts = data.strip().split("_")
        opcao = int(parts[0])

        if opcao == 1:  # Criar Usuario
            id_usuario = parts[1]
            password = parts[2]
            nome = parts[3]
            response = criar_usuario(data_store, id_usuario, password, nome)
        elif opcao == 2:  # Criar documento
            id_documento = parts[1]
            id_usuario = parts[2]
            titulo = parts[3]
            response = criar_documento(data_store, id_documento ,id_usuario, titulo)
        elif opcao == 3: # Listar documentos
            response = listar_documentos(data_store)
        elif opcao == 4:  # Criar nota
            id_nota = parts[1]
            id_documento = parts[2]
            id_autor = parts[3]
            titulo_nota = parts[4]
            conteudo_nota = parts[5]
            response = criar_nota(data_store, id_nota, id_documento, id_autor, titulo_nota, conteudo_nota)
        elif opcao == 5:  # Editar nota
            id_documento = parts[1]
            id_nota = parts[2]
            id_autor = parts[3]
            novo_titulo = parts[4]
            novo_conteudo = parts[5]
            response = editar_nota(data_store, id_documento, id_nota, id_autor, novo_titulo, novo_conteudo)
        elif opcao == 6:  # Listar conteúdo de uma nota
            id_documento = parts[1]
            id_nota = parts[2]
            response = listar_conteudo_nota(data_store, id_documento, id_nota)
        elif opcao == 7:  # Listar conteúdo de um documento
            id_documento = parts[1]
            response = listar_conteudo_documento(data_store, id_documento)
        elif opcao == 8:  # Detalhes sobre um documento
            id_documento = parts[1]
            response = detalhes_documento(data_store, id_documento)
        elif opcao == 9:  # Listar usuários existentes
            response = listar_usuarios(data_store)
        elif opcao == 10:  # Associar usuário a um documento
            id_usuario = parts[1]
            id_documento = parts[2]
            response = associar_usuario_documento(data_store, id_usuario, id_documento)
        elif opcao == 11:  # Listar documentos com acesso
            id_usuario = parts[1]
            response = listar_documentos_acesso(data_store, id_usuario)
        elif opcao == 12:  # Listar documentos alterados após uma data/hora
            id_usuario = parts[1]
            data_hora = parts[2]
            response = listar_documentos_alterados(data_store, id_usuario, data_hora)
        else:
            response = "Opção inválida."

        client_socket.sendto(response.encode(), address)

    client_socket.close()

def start_server():
    HOST = '127.0.0.1'  # endereço ip previo
    PORT = 5000         # porta local previa


    # Conexão TCP entre os sockets
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((HOST, PORT))
    #numero de conexões que o servidor pode enfileirar, apos isso é recusada.
    server_socket.listen(5)

    print(f"Servidor ouvindo em {HOST}:{PORT}")

    while True:
        client_socket, address = server_socket.accept()
        #colocamos cada cliente em uma thread, para que possamos receber varias requisições;
        client_handler = threading.Thread(target=handle_client, args=(client_socket, address, data_store))
        client_handler.start()

if __name__ == '__main__':
    start_server()
