# AULA - 1: Home
Após descompactar a pasta, entre pela sua linha de comando na pasta api, use o comando npm i, para instalar as dependências do back-end, e execute-o com o comando npm start. O back-end deve ser executado durante os nossos exercícios.
--strict ativa o strict no packagejson da aplicação
-d = dryRun significa que são alterações de teste, o seu projeto principal nao foi alterado. Serve pra ver se as alterações foram feitas no lugar correto

1. Começamos um projeto utilizando o angular/cli como ferramenta de apoio em todo nosso fluxo de trabalho. Utilizando a opção --strict, ligamos mais verificações de tipo no nosso projeto, melhorando logo na largada a nossa qualidade do nosso código.
2. Aprendemos como configurar o Bootstrap como framework de CSS global para nossa aplicação.
3. Começamos também a estruturar nossa aplicação utilizando o módulo Angular. Com a técnica do lazy loading, melhoramos o carregamento inicial da nossa aplicação.
4. Estudamos também como é composto um componente Angular e quais são os arquivos que o angular/cli gera para nós.
5. Começamos a desenvolver nossa primeira funcionalidade: o formulário de Login.
---



# AULA-2: Login
Observable = Observable é uma funcionalidade da biblioteca rxjs, que é utilizada internamente pelo framework e já é instalada quando você cria uma nova aplicação Angular. Com Observables, conseguimos lidar com transferência de dados assíncrona.
O angular possui duas formas de lidar com formulários. O template-driven e o reactive-forms
o processamento síncrono é aquele que acontece em sequência e ordenado, seguindo uma fila, e o outro processamento assíncrono só começa após o atual ser concluído.
Para fazer o tratamento de rotas do angular é necessario utilizar o router

.subscribe = é o .then do angular11
--routing = se possuir rotas no modulo

1. Como interagir com nosso backend utilizando o serviço HttpClient do Angular.
2. Como utilizar o mecanismo de Injeção de dependência do Angular para criar nossos próprios serviços e injetá-los nos nossos componentes.
3. Vimos também como criar um formulário do tipo Template Driven, em que toda a montagem e a regra de negócio ficam no arquivo de template, e o Angular realiza o controle do modelo de dados utilizando o componente ngModel.
4. Criamos um componente de mensagens genérico e aprendemos como receber parâmetros utilizando o @Input e como mostrar conteúdo dinâmico utilizando a interpolação do Angular.
5. Por fim, implementamos as validações do nosso formulário HTML utilizando o ngModel para pegar a referência do campo para avaliar se ele está válido ou não.
---

# AULA-3: Cadastro de usuário
Interfaces, nas palavras mais simples, descrevem a estrutura do objeto, o que significa que descreve como o objeto deve se parecer.
novoUsuarioForm!: FormGroup; => o ! significa que a propriedade pode ser nula ou nao
ngOnInit() é um local para colocar o código que precisamos executar logo que a classe é instanciada.

1. Como criar um formulário utilizando a técnica de formulários reativos, em que nós temos um pouco mais de configurações, mas ganhamos mais possibilidades e controle sobre o formulário.
2. Estudamos a diretiva routerLink e como o Angular analisa o caminho passado, avaliando primeiro a rota do módulo do componente e depois a rota global.
3. Criamos o serviço de cadastro de novo usuário e utilizamos a boa prática de criar uma interface para o retorno do backend e assim termos melhor produtividade e menos erros.
---

# AULA-4: Validação de formulário assíncrono
1. Exploramos o tópico de validações em formulário reativos no Angular. e aprendemos como aplicar validações comuns e padronizadas no nosso componente do nosso formulário, além de usar a classe utilitária Validators, padrão do Angular.
2. Criamos uma validação customizada para um campo e vimos quais são os requisitos para uma função ser reconhecida como validação no Angular.
3. Também trabalhamos em uma função de validação que avaliava mais do que um campo do nosso formulário.
4. Por fim, criamos uma validação que consulta o backend da nossa aplicação e aprendemos sobre os operadores RXJS, uma biblioteca poderosa que o Angular utiliza.
---

# AULA-5: Autenticação
1. Token JWT: Criptografia de JSON. Para que serve token JWT?
2. Um JWT é um padrão para autenticação e troca de informações definido pela RFC7519. Nele é possível armazenar de forma segura e compacta objetos JSON. Este token é um código Base64 e pode ser assinado usando um segredo ou par de chaves privadas/públicas.
---

