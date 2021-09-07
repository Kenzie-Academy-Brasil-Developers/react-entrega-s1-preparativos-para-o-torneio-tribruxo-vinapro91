![](https://i.imgur.com/EADhd9a.png)

### [Vídeo explicando a API](https://player.vimeo.com/video/505862305?title=0&amp;byline=0&amp;portrait=0&amp;color=8dc7dc)


Ao longo desta sprint vocês aprenderam muitas coisas novas, como: Libs, Componentes, Props, aprenderam a fazer deploy dos seus projetos, revisaram vários conceitos de JavaScript, aprenderam sobre States, API's, etc.

Neste projeto vamos desenvolver uma aplicação usando tudo o que você aprendeu, fazendo o uso de uma API pública. Então abra seu acervo de conteúdo, prepare seu workspace e bora produzir!

* * *

### Sobre a entrega

Esta é uma **aplicação temática**, você pode se deparar com alguns termos ou palavras que não está familiarizado, no entanto **não é necessário nenhum conhecimento prévio** ou **específico** relacionado ao conteúdo. Esta é apenas uma forma de **contextualizar** **requisições e respostas** entre o usuário, a API e a aplicação.

### Introdução - A API

[**A API do Harry Potter**](http://hp-api.herokuapp.com/) possui 4 elementos principais, ou endpoints:

![](https://images2.imgbox.com/a4/e2/SKSpr57v_o.png)

Para esta entrega, **não será necessário o uso dos 4 endpoints**, mas será **obrigatório** a utilização do endpoint **[Students](https://hp-api.herokuapp.com/api/characters/students)**.

### Introdução - A aplicação

> Os bruxos de [Hogwarts](https://harrypotter.fandom.com/pt-br/wiki/Escola_de_Magia_e_Bruxaria_de_Hogwarts) estão ansiosos para as Preparatórias do Torneio Tribruxo. Três alunos **(students)** foram escolhidos para o Torneio de preparatória, neste torneio **apenas um** `student` sairá triunfante. Quem será o vencedor ?

Abaixo um exemplo de um objeto `student`

![](https://images2.imgbox.com/65/bd/u5qJvbOJ_o.png)

### Você deverá:

*   Integrar as **respostas** da API na **interface** da sua aplicação de** <span style="color: #ff0000;" data-darkreader-inline-color="">forma aleatória</span>**
*   **Acessar**, **requisitar** e **renderizar** três objetos referentes ao endpoint `/students` através da **API**
*   Ao renderizar um objeto de `/students`, você deverá utilizar pelo menos o item **name** e mais dois itens, exemplo:

"name": "Cedric Diggory", **OBRIGATÓRIO  
**"house": "Hufflepuff", **OBRIGATÓRIO, <span style="color: #ff0000;" data-darkreader-inline-color="">item da sua escolha</span>**  
"alive": false, **OBRIGATÓRIO, <span style="color: #ff0000;" data-darkreader-inline-color="">item da sua escolha</span>**

* * *

### Passo 1 - Estruturando seu projeto

Antes de colocarmos a mão na massa e irmos para o código, é **extremamente importante** não pularmos a fase de **preparação** de um projeto. Para essa entrega de sprint, fizemos um protótipo da sua aplicação para que você possa se espelhar no **layout**, facilitar sua **organização** de arquivos e também organizar suas **prioridades**. **Porém:**

<span style="font-size: 18pt;">**Não é necessário ser igual ao figma! Ele é apenas <span style="color: #ff0000;" data-darkreader-inline-color="">para você ter um norte.</span>**</span>

Abaixo o protótipo em Figma:

[https://www.figma.com/file/U9RaKif2R0Jt6xQhxw3cFj/Torneio-Tribruxo?node-id=0%3A1](https://www.figma.com/file/U9RaKif2R0Jt6xQhxw3cFj/Torneio-Tribruxo?node-id=0%3A1)

Atente-se aos seguintes pontos, se possível anote em seu acervo de conteúdos

*   Qual a ideia da aplicação ?
*   Quais as funcionalidades no protótipo ? **_IMPORTANTE_**
*   Existe alguma funcionalidade a ser adicionada ?
*   Leia o retorno da API, alguma dúvida ?
*   Como será a organização de pastas ?
*   Possíveis problemas que serão enfrentados **Se existirem problemas registre-os no seu acervo!**
*   Pensou ferramenta específica para utilizar no projeto ? Ex: Trello, Notion, etc.
*   Mão na massa

### Passo 2 - Criando seu projeto

_Antes de começar fique atento a rubrica._

Agora você já pode começar a codar. Vamos começar criando seu projeto utilizando o [Create React App](https://alunos.kenzie.com.br/courses/28/assignments/3381), dê um nome legal para o seu projeto. Lembre-se de **criar** e **configurar** o seu repositório GitLab.

### Passo 3 - Código

Agora você já pode colocar seu plano de estruturação em prática. Lembre-se de começar sempre da parte mais básica da aplicação, estruture suas pastas e sempre pense antes de começar a codar um componente.

Não existe uma "receita de bolo" a se seguir num projeto, mas abaixo temos um exemplo de um possível caminho. Você pode usar para **adaptar** a **seu ritmo**.

**Exemplo:**

Create React App ⇒ Criar as pastas ⇒ Criar um Componente Student.js que irá receber o retorno da API ⇒ Testar um retorno da API ⇒ Guardar o Retorno da API em **State** ⇒ Renderizar um Retorno da API na tela importando Student.js no App.js ⇒ Fazer um layout para os retornos da aplicação div ⇒ Renderizar 3 Students na div ⇒ Renderizar um dos 3 estudantes aleatoriamente. ⇒ Deploy ⇒ Entrega

### Conclusão

Antes de efetuar a entrega, certifique-se que seu repositório e seu deploy estão devidamente configurados. Lembre-se de que apesar de ser um projeto que vale nota, a única coisa que vai realmente **fazer** **diferença** é você **aprender** o conteúdo, então **não** se **preocupe** com a **nota**, e sim com seu aprendizado e progresso pessoal.

### Links úteis

[Extensão Google Chrome JSON](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=pt-BR)

#### [Estruturando um projeto](https://alunos.kenzie.com.br/courses/55/assignments/8022)  

Dê um feedback sobre essa atividade [aqui](https://5i6ks8p58k7.typeform.com/to/cPWwNsaq).
