Eiii, turma! Hoje é a nossa última aula de React!😃



Nossa aula de hoje tem 3 objetivos principais:

1- Te fazer relembrar os pilares do React (state, componentes, props e uso de React Hooks)
2- Ter certeza de que você já consegue criar uma aplicação em React do zero (Create React app)❤️
3- Partiu codar muitão! 🚀



A tríade do react:

    Visual: o retorno dos elementos nos componentes
    Funcional: as funções de javascript que dão vida aos componentes
    Estado: Cria o poder de memória nos componentes

Dicionário react:

    npx create-react-app: boilerplate que cria um novo projeto react
    JSX: XML + Javascript, uma sintaxe que você vai estranhar no início, mas que facilita muito nossa vida. É html dentro do javascript.
    Elemento: tags html que retornam de um componente
    Componente: códigos isolados, independentes e reutilizáveis, podem ser funcões ou classes.
    SPA: Single page application que esse conceito de gerar experiência para os usuários, atualizando partes do código em vez da página inteira.
    Props: propriedades que passamos para componentes
    Estado: memória para manipular dados em componentes
    Eventos: Adciona ações a partir de interações dos usuários, assim como no javascript
    hooks: gancho, funções internas e customizadas para ajudar a resolver ciclo de vida e estado de componentes
    state: memória para manipular dados em componentes
    react-router-dom: lib que cria navegação entre as páginas
    axios: lib que nos ajuda a consumir API


Projeto Guiado:

Vamos criar uma single page application usando react, chamaremos de app divertido, rs. O objetivo é ter um front-end responsivo que consuma apis e nos permita interagir com as informações.
Esse é o comportamento esperado:

Aqui o projetinho da profa: https://projeto-final-lesbooks.netlify.app/
Requisito 	Descrição
Menu 	Dado que eu clico, em home sou redirecionada para rota "/", dado que eu clico em simpsons sou redirecionada para rota "/simpsons
Home 	Dado que eu entro na home, vizualizo o menu e o banner com um título, uma descrição e uma imagem.
Simpsons 	Dado que eu clico na página Simpsons, então vizualizo um personagem e um botão e toda vez que eu clicar no botão, o personagem deve trocar randomicamente.


Tecnologias que vamos usar:
Ferramenta 	Descrição
React 	Biblioteca javascript
Hooks 	APIs do React
Axios 	Biblioteca para consumir API
npm     Gerenciador de pacotes
Netlify Servidor para deploy
react-router-dom 	Biblioteca para criação de rotas no React


📁 Arquitetura

 📁 app-divertido
   |
   |-  📁 src
   |    |
   |    |- 📁 assets
   |         |- 📄 imagem.svg
   |
   |    |- 📁 components
   |         |- 📁 Banner 
   |                |- 📄 index.js
   |                |- 📄 styles.css
   |         |- 📁 Menu 
   |                |- 📄 index.js
   |                |- 📄 styles.css
   |
   |    |- 📁 pages
   |         |- 📁 Home 
   |                |- 📄 index.js
   |                |- 📄 styles.css
   |         |- 📁 Simpsons 
   |                |- 📄 index.js
   |                |- 📄 styles.css
   |
   |    |- 📁 routes
   |         |- 📄 Routes.js 
   |    
   |
   |
   |    |- 📄 App.js
   |    |- 📄 index.js
   |    |- 📄 global.css
   |
   |
   

Desafio:
Calma! É só mais uma TAREFINHA DE CASA que vira portfólio pra chamar de sua! Já treinamos bastante na sala de aula!

Continuar o mesmo projeto que iniciamos na sala, cada aluna deve subir no seu github e fazer deploy no netlify e enviar os links pelo classroom, não é para clonar o repo da professora!

Em casa devem ser criadas as features(funcionalidades) abaixo:

    O footer com icones de redes sociais, github, nome e minibio da autora.
    Uma nova página, consumindo outra api ou arquivo interno que simule um JSON, renderizando cards na tela com (img, titulo e descricao), além disso deve permitir uma busca por input atualizando os cards na tela de acordo com o que for digitado.
    Alterar menu inserindo nova página construída

    Todo o projeto deve estar com estilo e funcionando

Simara Conceição

    instagram
    linkedin
    github
    spotify
    quero ser dev

