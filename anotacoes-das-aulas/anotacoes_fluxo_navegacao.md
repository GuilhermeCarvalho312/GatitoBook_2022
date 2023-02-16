# Aula-1: Cartão de Animais

### Sobre os arquivos environment:
  Os arquivos "environment.ts" e "environment.prod.ts" são usados em projetos Angular para definir variáveis de ambiente. Essas variáveis são usadas para armazenar configurações específicas de cada ambiente, como URLs de API, chaves de acesso a serviços, configurações de segurança, entre outras.
  O arquivo "environment.ts" contém as variáveis de ambiente para o ambiente de desenvolvimento, enquanto o arquivo "environment.prod.ts" contém as variáveis de ambiente para o ambiente de produção.
  Ao usar esses arquivos, é possível alterar facilmente as variáveis de ambiente para diferentes ambientes, como ambiente de desenvolvimento, teste, produção, entre outros, sem precisar alterar manualmente o código da aplicação em si. Isso ajuda a manter o código organizado e modular, além de facilitar o gerenciamento de configurações específicas para cada ambiente.

### Sobre o ng-content:
  O ng-content é uma diretiva do Angular 11 que permite que você insira conteúdo em um componente a partir do seu template pai. Em outras palavras, ele é uma forma de injetar conteúdo dentro de um componente Angular.

  Quando você usa a diretiva ng-content em um componente, ele cria um ponto de inserção para conteúdo que será fornecido a partir de um componente pai. O conteúdo pode ser qualquer coisa, como texto, elementos HTML, ou outros componentes.

  Por exemplo, suponha que você tenha um componente meu-componente que tenha o seguinte template:

  ```html
  <div class="meu-componente">
    <h1>Título do componente</h1>
    <ng-content></ng-content>
  </div>
  ```
  Quando você usa esse componente em outro template, pode incluir conteúdo dentro dele usando a seguinte sintaxe:

  ```html
  <app-meu-componente>
    <p>Conteúdo adicionado ao meu componente</p>
  </app-meu-componente>
  ```
  Nesse exemplo, o conteúdo adicionado ao componente meu-componente é o parágrafo <p>Conteúdo adicionado ao meu componente</p>. Esse conteúdo é fornecido a partir do template do componente pai e é injetado dentro do componente meu-componente no local onde a diretiva ng-content foi definida.

  O ng-content pode ser usado para criar componentes altamente reutilizáveis, pois permite que você injete conteúdo em um componente a partir de qualquer lugar no aplicativo. Ele é uma das diretivas mais importantes do Angular e é frequentemente usada em conjunto com outras diretivas para criar componentes complexos e dinâmicos.

## O que foi feito na Aula - 1:
  1. Como criar um componente reutilizável, recebendo atributos utilizando o decorator @Input
  2. Aprendemos a projetar um conteúdo externo no nosso componente utilizando a diretiva ng-content
  3. Criamos um serviço e enviamos além dos parâmetros, o header da requisição utilizando o objeto HttpHeaders
  4. Centralizamos a configuração do endereço da API utilizando o arquivo de environment.
---

# Aula-2: Lista de Animais

### Sobre o routerLink:
  O *routerLink* é uma diretiva do Angular que permite a navegação dentro de um aplicativo através de rotas definidas em um arquivo de roteamento.

  Quando você adiciona a diretiva *routerLink* a um elemento HTML, como um link ou um botão, você pode especificar a rota para a qual deseja navegar. Por exemplo:

  ```html
  <a [routerLink]="['/clientes']">Clientes</a>
  ```
  Nesse exemplo, a diretiva *routerLink* é adicionada a um elemento de link e é definido o valor ['/clientes'] como parâmetro. Esse valor é um array de strings que representa a rota que você deseja navegar. Neste caso, a rota é '/clientes'.

  O valor da propriedade *routerLink* pode ser definido como uma string ou um array de strings. Quando definido como uma string, o valor representa o caminho completo para a rota. Quando definido como um array, o primeiro elemento do array representa o caminho base da rota e os elementos subsequentes representam os parâmetros da rota.

  Por exemplo, considerando a seguinte rota:

  ```javascript
  { path: 'clientes/:id', component: ClienteDetalheComponent }
  ```
  Para navegar para esta rota, passando um parâmetro id, você pode usar a seguinte sintaxe:

  ```html
  <a [routerLink]="['/clientes', cliente.id]">Detalhes</a>
  ```
  Nesse exemplo, o valor da propriedade *routerLink* é um array com dois elementos: '/clientes' é o caminho base da rota e cliente.id é o parâmetro id da rota.

  Quando o usuário clica no link ou botão com a diretiva *routerLink*, o Angular verifica as rotas definidas no arquivo de roteamento do aplicativo e navega para a rota correspondente. O componente correspondente a essa rota é então carregado e exibido na tela.
