# Case produtos backend

## Pré requisitos
- [Node](https://nodejs.org/pt)

## Como executar
1. Baixar as dependências: `npm install`
2. Criar pasta .tmp na raiz do projeto: `mkdir .tmp`
3. Rodar as migrations do prisma: `npx prisma migrate dev`
4. Subir a aplicação `npm run start:dev`

## Documentação da API

### Listas

#### Criar Lista
- **URL**: `/lists`
- **Método**: POST
- **Código de Status**: 201
- **Body**:
  - `title` (string): Título da lista.
- **Resposta**:
  - Retorna o objeto da lista criada.

#### Listar Todas as Listas
- **URL**: `/lists`
- **Método**: GET
- **Código de Status**: 200
- **Resposta**:
  - Retorna um array com todas as listas.

#### Atualizar Lista
- **URL**: `/lists/:id`
- **Método**: PUT
- **Código de Status**: 200
- **Parâmetros**:
  - `id` (string): ID da lista a ser atualizada.
- **Body**:
  - `title` (string): Novo título da lista.
- **Resposta**:
  - Retorna o objeto da lista atualizada.

#### Deletar Lista
- **URL**: `/lists/:id`
- **Método**: DELETE
- **Código de Status**: 204
- **Parâmetros**:
  - `id` (string): ID da lista a ser deletada.
- **Resposta**:
  - Sem conteúdo.

### Tarefas

#### Criar Tarefa
- **URL**: `/tasks`
- **Método**: POST
- **Código de Status**: 201
- **Body**:
  - `title` (string): Título da tarefa.
  - `description` (string): Descrição da tarefa.
  - `priority` (number): Nível de prioridade da tarefa.
  - `finishAt` (date): Data de vencimento da tarefa (formato ISO).
  - `listId` (string): ID da lista à qual a tarefa pertence.
- **Resposta**:
  - Retorna o objeto da tarefa criada.

#### Listar Todas as Tarefas
- **URL**: `/tasks`
- **Método**: GET
- **Código de Status**: 200
- **Resposta**:
  - Retorna um array com todas as tarefas.

#### Atualizar Tarefa
- **URL**: `/tasks/:id`
- **Método**: PUT
- **Código de Status**: 200
- **Parâmetros**:
  - `id` (string): ID da tarefa a ser atualizada.
- **Body**:
  - `title` (string): Novo título da tarefa.
  - `description` (string): Nova descrição da tarefa.
  - `priority` (number): Novo nível de prioridade da tarefa.
  - `finishAt` (date): Nova data de vencimento da tarefa (formato ISO).
  - `listId` (string): ID da nova lista para a tarefa.
  - `isFinished` (boolean): Status de conclusão da tarefa.
- **Resposta**:
  - Retorna o objeto da tarefa atualizada.

#### Deletar Tarefa
- **URL**: `/tasks/:id`
- **Método**: DELETE
- **Código de Status**: 204
- **Parâmetros**:
  - `id` (string): ID da tarefa a ser deletada.
- **Resposta**:
  - Sem conteúdo.

#### Upload de Arquivo
- **URL**: `/tasks/:id/files`
- **Método**: POST
- **Código de Status**: 200
- **Parâmetros**:
  - `id` (string): ID da tarefa à qual o arquivo será associado.
- **Headers**:
  - `Content-Type`: `multipart/form-data`
- **Body (Form-Data)**:
  - `file` (file): Arquivo a ser enviado.
    - **Tamanho Máximo**: 100MB.
- **Resposta**:
  - Retorna o objeto do arquivo criado.
- **Validações**:
  - O tamanho máximo do arquivo é de 100MB.
  - A rota aceita somente arquivos enviados como `multipart/form-data`.

#### Listar Todas os Arquivos
- **URL**: `/tasks/:id/files`
- **Método**: GET
- **Código de Status**: 200
- **Resposta**:
  - Retorna um array com todos os arquivos.

#### Download de Arquivo
- **URL**: `/files/:id`
- **Método**: GET
- **Código de Status**: 200
- **Parâmetros**:
  - `id` (string): ID do arquivo a ser baixado.
- **Resposta**:
  - Faz o download do arquivo como um fluxo (stream).
- **Exemplo de Resposta**:
  - O arquivo será enviado como uma resposta binária no corpo da requisição.
- **Observações**:
  - Certifique-se de que o ID fornecido corresponde a um arquivo existente.
  - A resposta será manipulada diretamente pelo cliente, como navegadores ou ferramentas de download.
