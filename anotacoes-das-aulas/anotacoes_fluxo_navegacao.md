# Aula-1: Cartão de Animais

  ## Sobre os arquivos environment:
  Os arquivos "environment.ts" e "environment.prod.ts" são usados em projetos Angular para definir variáveis de ambiente. Essas variáveis são usadas para armazenar configurações específicas de cada ambiente, como URLs de API, chaves de acesso a serviços, configurações de segurança, entre outras.
  O arquivo "environment.ts" contém as variáveis de ambiente para o ambiente de desenvolvimento, enquanto o arquivo "environment.prod.ts" contém as variáveis de ambiente para o ambiente de produção.
  Ao usar esses arquivos, é possível alterar facilmente as variáveis de ambiente para diferentes ambientes, como ambiente de desenvolvimento, teste, produção, entre outros, sem precisar alterar manualmente o código da aplicação em si. Isso ajuda a manter o código organizado e modular, além de facilitar o gerenciamento de configurações específicas para cada ambiente.

  ## Sobre o ng-content:
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

  ## Sobre o routerLink:
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

  ## Sobre o operador '??'(nullish coalescing operator):
  O operador ?? em TypeScript é conhecido como "nullish coalescing operator" ou "operador de coalescência nula". Esse operador é usado para fornecer um valor padrão quando uma variável ou expressão é nula ou indefinida. O operador ?? retorna o valor do lado esquerdo da expressão se ele não for nulo ou indefinido. Se o valor do lado esquerdo for nulo ou indefinido, ele retorna o valor do lado direito da expressão. A sintaxe do operador ?? é a seguinte:

  ```typescript
  valor1 ?? valor2
  ```

  onde valor1 é a variável ou expressão que você deseja avaliar e valor2 é o valor padrão que você deseja usar se valor1 for nulo ou indefinido.

  Por exemplo, considere o seguinte código:
  ```typescript
  const nome: string | null = null;
  const nomeCompleto = nome ?? "Nome não informado";
  console.log(nomeCompleto); // saída: "Nome não informado"
  ```
  Neste exemplo, a variável nome é nula, então o operador ?? retorna o valor padrão "Nome não informado". Se a variável nome não fosse nula, o operador ?? retornaria o valor de nome. O operador ?? é especialmente útil em situações em que você deseja fornecer um valor padrão para uma variável ou expressão que pode ser nula ou indefinida. No entanto, tenha em mente que o operador ?? só verifica se o valor é nulo ou indefinido, e não outros valores "falsy" como 0 ou "". Para verificar esses valores, você pode usar o operador || em vez disso.

  ## Sobre o subscribeHell:
  "Subscribe hell" é um termo usado para descrever uma situação em que há muitos encadeamentos (chamadas) de funções subscribe em um código Angular. Isso pode acontecer quando um desenvolvedor precisa lidar com observables encadeados ou quando está trabalhando com múltiplos componentes que precisam se comunicar entre si. 

  O problema com o "subscribe hell" é que pode tornar o código difícil de ler, entender e manter. Além disso, a cada nova chamada de subscribe, é criada uma nova instância do observable, o que pode ter um impacto negativo no desempenho da aplicação. 

  Para evitar o "subscribe hell" em um projeto Angular, é possível usar algumas técnicas, como o uso de operadores como o switchMap, mergeMap e concatMap, que permitem combinar vários observables em um único fluxo de dados. Além disso, é importante manter um bom planejamento da arquitetura do projeto e dividir a lógica em componentes menores e mais reutilizáveis.

### Como evitar o SubcribeHell:
  **De:** 

  ```typescript
        ngOnInit(): void {
      this.usuarioService.retornaUsuario().subscribe((responseUsuario: any) => {
        const userName: string = responseUsuario.name ?? '';
        this.animaisService
          .listaDoUsuarios(userName)
          .subscribe((responseAnimais: any) => {
            this.animais = responseAnimais;
          });
      });
    }
  ```

  **Para: **

  ```typescript
        import { switchMap } from 'rxjs/operators';

        ngOnInit(): void {
          this.usuarioService.retornaUsuario().pipe(
            switchMap((responseUsuario: any) => {
              const userName: string = responseUsuario.name ?? '';
              return this.animaisService.listaDoUsuarios(userName);
            })
          ).subscribe((responseAnimais: any) => {
            this.animais = responseAnimais;
          });
        }
  ```

  No código acima, usamos o operador pipe do RxJS para encadear a função switchMap ao resultado da chamada do serviço this.usuarioService.retornaUsuario(). O operador switchMap recebe o resultado da primeira chamada como entrada e retorna o resultado da segunda chamada, que é uma lista de animais. A lista é então atribuída à propriedade this.animais. Dessa forma, o encadeamento de subscribes foi evitado, tornando o código mais legível e fácil de entender e manter.


  ## Sobre o operador '!'(non-null assertion): 
  Em TypeScript, o símbolo "!" é chamado de operador de não-nulidade ou operador "non-null assertion". Ele é usado para indicar que uma propriedade ou variável não é nula, mesmo que o TypeScript possa estar emitindo um aviso ou erro indicando o contrário. 

  O operador "!" é usado para suprimir um erro de tipo de dados em TypeScript, que ocorre quando uma propriedade é inicializada com o valor "null" ou "undefined". Por exemplo, se uma propriedade chamada "nome" de uma classe tiver sido definida como opcional e estiver inicialmente com o valo "null", pode ser necessário usar o operador "!" para **garantir que ela não seja nula antes de usá-la em algum método ou função.**

## Sobre o guarda de rotas CanLoad:
  ```typescript
    import { Injectable } from '@angular/core';
    import {
      CanLoad,
      Route,
      UrlSegment,
      ActivatedRouteSnapshot,
      RouterStateSnapshot,
      UrlTree,
      Router,
    } from '@angular/router';
    import { Observable } from 'rxjs';
    import { UsuarioService } from './usuario/usuario.service';

    @Injectable({
      providedIn: 'root',
    })
    export class AutenticacaoGuard implements CanLoad {
  ```

  - A classe AutenticacaoGuard é definida como um serviço injetável (@Injectable) e implementa a interface CanLoad, que permite que o guarda de rotas verifique se uma determinada rota pode ser carregada. A interface CanLoad exige a implementação do método canLoad().
  - A classe também está importando algumas classes e interfaces do módulo @angular/router, incluindo a classe Router, que será usada para redirecionar o usuário para a página de login caso ele não esteja autenticado.

  ```typescript
      constructor(private usuarioService: UsuarioService, private router: Router) {}
  ```

  - O construtor da classe está injetando o serviço UsuarioService e o serviço Router.

  ```typescript
          canLoad(
      route: Route,
      segments: UrlSegment[]
    ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      if (!this.usuarioService.estaLogado()) {
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
    }
  ```
  O método canLoad() é implementado para verificar se o usuário está autenticado antes de carregar a rota. O método recebe como parâmetros a rota e os segmentos de URL.

  O método usa o serviço UsuarioService para verificar se o usuário está autenticado. Se o usuário não estiver autenticado, o método usa o serviço Router para redirecioná-lo para a página de login. Caso contrário, o método retorna true para permitir que a rota seja carregada.

  O método pode retornar um booleano diretamente ou uma Promise que resolve em um booleano, um UrlTree ou uma Observable que emite um booleano ou UrlTree. Isso permite que o método canLoad() seja assíncrono, se necessário.

  Em resumo, o código implementa um Guarda de Rotas (AutenticacaoGuard) que verifica se o usuário está autenticado antes de carregar uma determinada rota. Se o usuário não estiver autenticado, ele será redirecionado para a página de login. Caso contrário, a rota será carregada normalmente.
  
---

  ## O que foi feito na aula 2: 
  1. Como criar uma página utilizando diversos componentes reutilizáveis utilizando a composição.
  2. Aprendemos a utilizar o operador switchMap para concatenar dois fluxos de informações e não realizar um subscribe dentro de outro subscribe.
  3. Aprendemos a utilizar guarda de rotas para controlar o fluxo de navegação do usuário em nossa aplicação.
---

# Aula 3: Detalhe do animal

  ## Sobre o ActivatedRoute:
  O ActivatedRoute é uma classe do Angular que é usada para obter informações sobre a rota ativa na aplicação. Ele é um objeto que contém informações sobre a rota atual, incluindo o caminho da URL, parâmetros de consulta e parâmetros de rota.
  A classe ActivatedRoute é injetada em um componente ou serviço que está sendo usado em uma rota e fornece informações sobre a rota atual.

  ## Sobre o Interceptor:
  Em Angular 11, um interceptor é um recurso que permite que você intercepte as solicitações HTTP feitas por sua aplicação antes que elas sejam enviadas para o servidor e/ou intercepte as respostas recebidas do servidor antes que elas sejam entregues aos componentes da sua aplicação.

  ## Sobre o método pipe: 
  O método pipe em Angular 11 é usado para compor funções que podem ser aplicadas a um objeto de forma sequencial. Ele é frequentemente usado em combinação com o operador de RxJS |, permitindo que você crie cadeias de operações em observáveis.
  Quando você usa o método pipe em um objeto, você está criando uma nova cadeia de operações que será aplicada a esse objeto. Por exemplo, você pode criar uma cadeia de operações que inclui filtragem, mapeamento e redução em um array ou em um observável.

  Aqui está um exemplo simples de como usar o método pipe com observáveis em Angular 11:

  ```typescript
      import { Component } from '@angular/core';
      import { of } from 'rxjs';
      import { map, filter } from 'rxjs/operators';

      @Component({
        selector: 'app-root',
        template: '<div>{{ mensagem }}</div>',
      })
      export class AppComponent {
        mensagem: string;

        constructor() {
          const numeros = of(1, 2, 3, 4, 5);
          this.mensagem = 'Números pares: ';

          numeros
            .pipe(
              filter(numero => numero % 2 === 0),
              map(numero => ` ${numero}`)
            )
            .subscribe(resultado => this.mensagem += resultado);
        }
      }
  ```

  Neste exemplo, temos um componente que cria um observable numeros com cinco números inteiros e, em seguida, aplica uma cadeia de operações usando o método pipe.

  Na cadeia de operações, usamos o método filter para filtrar apenas os números pares e o método map para converter cada número em uma string contendo um espaço e o número. Em seguida, adicionamos essas strings a uma mensagem que será exibida no template do componente.

  Por fim, usamos o método subscribe para se inscrever no observable resultante da cadeia de operações e exibir a mensagem final no template.

  Em resumo, o método pipe em Angular 11 é usado para criar cadeias de operações em objetos, como observáveis, permitindo que você aplique funções de forma sequencial para transformar ou manipular esses objetos. Ele é frequentemente usado em combinação com o operador | do RxJS.

  ## Sobre os operadores *mapTo* e *catchError*:
  O mapTo e o catchError são operadores do RxJS que podem ser usados com o método pipe em Angular 11 para transformar e manipular os valores de um Observable.

  O operador mapTo transforma cada valor emitido por um Observable em um valor específico. Por exemplo, se você tem um Observable que emite um valor booleano true, você pode usar o operador mapTo para transformar esse valor em um valor numérico 1. O valor emitido pelo operador mapTo não depende do valor emitido pelo Observable original.

  Aqui está um exemplo de como usar o operador mapTo para transformar um Observable que emite um valor booleano true em um Observable que emite um valor numérico 1:

  ```typescript
      import { of } from 'rxjs';
      import { mapTo } from 'rxjs/operators';

      const observable = of(true);

      observable.pipe(
        mapTo(1)
      ).subscribe(value => console.log(value)); // saída: 1
  ```

  O operador catchError é usado para capturar erros emitidos por um Observable e tratar esses erros. Em geral, quando um erro é emitido por um Observable, ele encerra a execução do Observable. Mas com o operador catchError, você pode interceptar o erro e fazer algo com ele, como retornar um valor padrão ou lançar um novo erro.

  Aqui está um exemplo de como usar o operador catchError para tratar erros em um Observable:

  ```typescript
      import { throwError, of } from 'rxjs';
      import { catchError } from 'rxjs/operators';

      const observable = throwError('Erro');

      observable.pipe(
        catchError(error => of('Valor padrão'))
      ).subscribe(value => console.log(value)); // saída: Valor padrão
  ```
  Neste exemplo, o Observable observable emite um erro usando a função throwError. Em seguida, usamos o operador catchError para capturar o erro e retornar um valor padrão ('Valor padrão') usando a função of.

  Em resumo, o operador *mapTo* é usado para transformar valores emitidos por um Observable em valores específicos, enquanto o operador *catchError* é usado para capturar e tratar erros emitidos por um Observable. Ambos podem ser usados com o método pipe em Angular 11 para transformar e manipular os valores de um Observable.

  ## O que foi feito na Aula 3:
  1. Como parametrizar a rota da aplicação e utilizar essa informação com o serviço ActivatedRoute

  2. Aprendemos como anexar o token a todas as requisições ao backend criando um serviço do tipo Interceptor

  3. Criamos as funções de curtir e excluir e aprendemos mais sobre os operadores *mapTo* e *catchError*

---

# Aula 4: Comentários

  ## Sobre o método *switchMap*:
  O método **switchMap** é um operador do RxJS, que é uma biblioteca usada em Angular 11 para trabalhar com programação reativa. O **switchMap** é usado para transformar um Observable em outro Observable, permitindo a composição de várias fontes de dados em um único fluxo de dados.

  O método **switchMap** é usado para fazer uma operação de "troca" (ou "switch") entre um Observable fonte e um Observable secundário. Ele recebe uma função como argumento, que é chamada para cada valor emitido pelo Observable fonte. Essa função retorna um novo Observable, que substituirá o Observable fonte. Em outras palavras, o **switchMap** troca um Observable por outro.

  Por exemplo, imagine que você tenha um serviço que faz uma chamada HTTP para buscar dados de um servidor. Usando o **switchMap**, você pode transformar essa chamada HTTP em um Observable que emite os dados retornados pelo servidor. Você pode, então, usar o resultado desse Observable para fazer outra chamada HTTP, e assim por diante.

  Aqui está um exemplo de como o switchMap pode ser usado em um componente Angular:
  ```typescript
    import { Component } from '@angular/core';
    import { Observable } from 'rxjs';
    import { switchMap } from 'rxjs/operators';
    import { DataService } from './data.service';

    @Component({
      selector: 'app-meus-dados',
      template: `
        <div *ngIf="dados$ | async as dados">
          <h2>{{ dados.nome }}</h2>
          <p>{{ dados.endereco }}</p>
        </div>
      `
    })
    export class MeusDadosComponent {
      dados$: Observable<any>;

      constructor(private dataService: DataService) { }

      ngOnInit() {
        this.dados$ = this.dataService.getUsuario()
          .pipe(switchMap(usuario => this.dataService.getEndereco(usuario.id)));
      }
    }
  ```
  Neste exemplo, o componente MeusDadosComponent usa o serviço DataService para buscar dados de um usuário e seu endereço. O método getUsuario() retorna um Observable que emite um objeto usuario, que contém um id. Usando o switchMap, o componente pode trocar o Observable emitido por getUsuario() por outro Observable emitido por getEndereco(usuario.id), que busca o endereço do usuário pelo seu ID. O resultado é que o Observable final dados$ emite um objeto que contém as informações do usuário e do endereço. Quando a página é renderizada, as informações são exibidas usando o *ngIf e a sintaxe do async pipe.

  ## Sobre o método *tap*:
  O método tap é um operador do RxJS que é comumente usado em Angular 11 para depuração, logging e efeitos colaterais. O tap não altera o fluxo de dados do Observable, mas permite executar uma função com os dados emitidos pelo Observable, sem afetar a saída do Observable.

  O tap recebe uma função como argumento, que é chamada para cada valor emitido pelo Observable. Essa função pode fazer qualquer coisa, como imprimir informações no console, atualizar uma variável, fazer uma chamada de serviço ou qualquer outra operação que não afete o fluxo de dados do Observable.

  Por exemplo, imagine que você tenha um componente que faz uma chamada HTTP para buscar dados de um servidor e, em seguida, os exibe em uma tabela. Você pode usar o método tap para imprimir os dados no console para depuração e para atualizar uma variável que controla se os dados foram carregados com sucesso.

  Aqui está um exemplo de como o tap pode ser usado em um componente Angular:
  ```typescript
  import { Component } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { tap } from 'rxjs/operators';

  @Component({
    selector: 'app-meus-dados',
    template: `
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let usuario of usuarios">
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.telefone }}</td>
          </tr>
        </tbody>
      </table>
    `
  })
  export class MeusDadosComponent {
    usuarios: any[];

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
        .pipe(tap(usuarios => console.log(usuarios)))
        .subscribe(usuarios => this.usuarios = usuarios);
    }
  }
  ```
  Neste exemplo, o componente MeusDadosComponent usa o serviço HttpClient do Angular para buscar dados de usuários de uma API pública. Usando o método tap, o componente pode imprimir os dados no console para depuração. Além disso, o tap atualiza uma variável usuarios com os dados retornados pela chamada HTTP. Finalmente, o componente usa o *ngFor para exibir os dados em uma tabela.

  Em resumo, o método tap é usado para executar efeitos colaterais em um Observable, sem afetar seu fluxo de dados. Ele é útil para depuração, logging e atualização de variáveis, permitindo que você observe o fluxo de dados do Observable e execute ações secundárias ao mesmo tempo.

  ## Sobre o **Resolver**:
  Em Angular 11, o "resolver" é um recurso que permite pré-carregar dados antes de carregar um componente. Ele é usado para resolver dados que um componente precisa antes que o próprio componente seja exibido na tela.

  O Resolver é uma classe que implementa a interface "Resolve" e fornece uma lógica personalizada para pré-carregar dados antes que um componente seja carregado. O Resolver pode ser adicionado a uma rota em um arquivo de roteamento do Angular. Quando uma rota com um Resolver é acionada, o Resolver é chamado para pré-carregar os dados necessários. Somente quando o Resolver for concluído, o componente será carregado.

  O Resolver é útil em situações em que um componente precisa de dados de um serviço ou API antes que ele possa ser exibido na tela. Pré-carregar esses dados pode melhorar o desempenho da aplicação, pois o usuário não precisa esperar pela resposta da API ou serviço após a exibição do componente. Além disso, o Resolver pode ser usado para validar as permissões do usuário antes de permitir que um componente seja exibido.

  Em resumo, a função do Resolver em Angular 11 é pré-carregar dados necessários para um componente antes que o próprio componente seja exibido na tela.









