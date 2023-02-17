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





