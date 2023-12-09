import socket

#FEITO
def criar_usuario(client_socket, HOST, PORT):
    id_usuario = input('Digite o ID do usuário: ')
    nome = input('Digite o nome do user: ')
    password = input('Digite a senha do user: ')
    
    requisicao = f"1_{id_usuario}_{password}_{nome}\n"
    print("Mensagem que será enviada para o servidor: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
        
    print("Mensagem recebida do servidor:", data)

#FEITO
def criar_documento(client_socket, HOST, PORT):
    id_documento = input('Digite o ID do documento: ')
    id_usuario = input('Digite o ID do usuário(tem que existir): ')
    titulo = input('Digite o título do documento: ')
    
    requisicao = f"2_{id_documento}_{id_usuario}_{titulo}\n"
    print("Mensagem que será enviada para o servidor: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print(data)

#FEITO
def listar_documentos(client_socket, HOST, PORT):
    requisicao = "3\n"
    print("Mensagem que sera mandada para o server: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print("Documentos existentes: \n", data)

#FEITO
def criar_nota(client_socket, HOST, PORT):
    id_nota = input('Digite o ID da nota: ')
    id_documento = input('Digite o ID do documento para adicionar a nota: ')
    id_autor = input('Digite o ID do autor (tem que ter acesso): ')
    titulo_nota = input('Digite o título da nova nota: ')
    conteudo_nota = input('Digite o conteúdo da nova nota: ')
    
    nota = f"4_{id_nota}_{id_documento}_{id_autor}_{titulo_nota}_{conteudo_nota}\n"
    print("Mensagem que sera mandada para o server: " + nota)
    
    client_socket.sendto(nota.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print(data)

#FEITO
def editar_nota(client_socket, HOST, PORT):
    id_documento = input('Digite o ID do documento da nota a ser editada: ')
    id_nota = input('Digite o ID da nota a ser editada: ')
    id_autor = input('Digite o ID do autor (tem que ter acesso): ')
    novo_titulo = input('Digite o novo titulo da nota: ')
    novo_conteudo = input('Digite o novo conteúdo da nota: ')
    
    edicao_nota = f"5_{id_documento}_{id_nota}_{id_autor}_{novo_titulo}_{novo_conteudo}\n"
    print("Mensagem que sera mandada para o server: " + edicao_nota)
    
    client_socket.sendto(edicao_nota.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print(data)

#FEITO
def listar_conteudo_nota(client_socket, HOST, PORT):
    id_documento = input('Digite o ID do documento da nota: ')
    id_nota = input('Digite o ID da nota: ')
    
    requisicao = f"6_{id_documento}_{id_nota}\n"
    print("Mensagem que sera mandada para o server: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print("Conteúdo da nota:", data)

#FEITO
def listar_conteudo_documento(client_socket, HOST, PORT):
    id_documento = input('Digite o ID do documento: ')
    
    requisicao = f"7_{id_documento}\n"
    print("Mensagem que sera mandada para o server: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print("Conteúdo do documento:", data)

#FEITO
def detalhes_documento(client_socket, HOST, PORT):
    id_documento = input('Digite o ID do documento: ')
    
    requisicao = f"8_{id_documento}\n"
    print("Mensagem que sera mandada para o server: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print("Detalhes do documento:", data)

#FEITO
def listar_usuarios(client_socket, HOST, PORT):
    requisicao = "9\n"
    print("Mensagem que sera mandada para o server: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print("Usuários existentes: \n", data)

#FEITO
def associar_usuario_documento(client_socket, HOST, PORT):
    id_usuario = input('Digite o ID do usuário: ')
    id_documento = input('Digite o ID do documento: ')
    
    associacao = f"10_{id_usuario}_{id_documento}\n"
    print("Mensagem que sera mandada para o server: " + associacao)
    
    client_socket.sendto(associacao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print(data)

#FEITO
def listar_documentos_acesso(client_socket, HOST, PORT):
    id_usuario = input('Digite o ID do usuário: ')
    
    requisicao = f"11_{id_usuario}\n"
    print("Mensagem que sera mandada para o server: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print(data)

#FEITO
def listar_documentos_alterados(client_socket, HOST, PORT):
    id_usuario = input('Digite o ID do usuário: ')
    data_hora = input('Digite a data/hora no formato YYYY-MM-DD HH:MM:SS: ')
    
    requisicao = f"12_{id_usuario}_{data_hora}\n"
    print("Mensagem que sera mandada para o server: " + requisicao)
    
    client_socket.sendto(requisicao.encode(), (HOST, PORT))
    data = client_socket.recv(2000).decode()
    
    if len(data) == 1:
        data = client_socket.recv(1024).decode()
    
    print("Mensagem: " + data)

def start_client():
    HOST = '127.0.0.1'  # endereço ip previo
    PORT = 5000         # porta local previa


    # comunicação via TCP
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect((HOST, PORT))
    #fazemos a comunicação atraves dessa conexão entre os dois pontos finais (server <-> cliente)

    sair = True
    data = ""

    while sair:
        opcao = int(input('''
        \n\n# MENU PRINCIPAL #\n
        1 - Criar Novo Usuario
        2 - Criar documento
        3 - Listar todos documentos
        4 - Criar nota em um documento
        5 - Editar nota em um documento
        6 - Listar conteúdo de uma nota
        7 - Listar conteúdo de um documento
        8 - Detalhes sobre um documento
        9 - Listar usuários existentes
        10 - Associar usuário a um documento
        11 - Listar documentos com acesso
        12 - Listar documentos alterados após uma data/hora
        0 - Sair
        - > '''))
        print("Sua escolha foi:", opcao)

        if opcao == 1:
            criar_usuario(client_socket, HOST, PORT)
        elif opcao == 2:
            criar_documento(client_socket, HOST, PORT)
        elif opcao == 3:
            listar_documentos(client_socket, HOST, PORT)
        elif opcao == 4:
            criar_nota(client_socket, HOST, PORT)
        elif opcao == 5:
            editar_nota(client_socket, HOST, PORT)
        elif opcao == 6:
            listar_conteudo_nota(client_socket, HOST, PORT)
        elif opcao == 7:
            listar_conteudo_documento(client_socket, HOST, PORT)
        elif opcao == 8:
            detalhes_documento(client_socket, HOST, PORT)
        elif opcao == 9:
            listar_usuarios(client_socket, HOST, PORT)
        elif opcao == 10:
            associar_usuario_documento(client_socket, HOST, PORT)
        elif opcao == 11:
            listar_documentos_acesso(client_socket, HOST, PORT)
        elif opcao == 12:
            listar_documentos_alterados(client_socket, HOST, PORT)
        elif opcao == 0:
            client_socket.sendto("0\n".encode(), (HOST, PORT))
            print("Encerrou a conexão com o servidor!")
            client_socket.close()
            sair = False
        else:
            print("\nNumero não está na lista")

        if len(data) == 1:
            #vai receber dados de 1024 bytes
            data = client_socket.recv(1024).decode()
            data = ""

if __name__ == '__main__':
    start_client()
