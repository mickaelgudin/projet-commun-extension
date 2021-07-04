# The project
This project uses snippets for autocompletion and the language server protocol for the diagnostic(see below what this extension provides).

## Installation

**For Vscode**
```npm install```
Then you can run the projet with the menu : ```Run > Run without debugging```

**For Atom**
You can access the Atom snippets in snippets/Atom and set them in the global file snippets for your local Atom app.

## Github repositories reuse
- https://github.com/quanzaiyu/vscode-vue-pug-enhanced (to start with some already implemented pug snippets)
- https://github.com/AlanCezarAraujo/vs-code-stylus (for the grammar and snippets for stylus)
- https://github.com/vuejs/vetur (for the grammar of pug and detection of sublanguage inside a .vue file)

We used this repo https://github.com/EoinDavey/tsPEG to generate all the parsers for our diagnostic part.

The Vscode snippets were translated into Atom snippets with the help of the Atom extension Atomizr(which allow us to translate the snippets between different IDE not only Vscode and Atom), although issues were encountered in the translation(Atom snippet don't allow $ inside key definition, [] in body property is allowed in Vscode snippets but not in Atom and Atomizr doesn't make that translation) but Atomizr was helpful nonetheless.

## Autocompletion for the following technologies

**Pug (inside pug templates in a .vue files and also inside .pug files)**
- Quasar component
- CSS Quasar helper classes css
- SVG
- HTML
- Attributes and directives de Vue & string interpolation

**Stylus (style tag with stylus as the language inside .vue files but also inside .styl files)**
- Stylus (voir : https://github.com/AlanCezarAraujo/vs-code-stylus) 
- Stylus Quasar variables

**Typescript (script tag with ts as the language inside .vue files but also inside .ts files)**
- Meteor(startup, methods, publish)
- Vue property decorator
- Vue router constructor
- Astronomy schema (Class.create, https://jagi.github.io/meteor-astronomy/)
- functions for Mocha et Chai
- functions for les stubs Sinon
- functions for Cypress.io API

## Diagnostic for the following technologies

**Pug(inside pug templates in a .vue files and also inside .pug files)**
- Quasar component
- Quasar classes css helper
- SVG
- HTML
- Attributes and directives de Vue & string interpolation

**Stylus(style tag with stylus as the language inside .vue files but also inside .styl files)**
- Stylus quasar variables

**Typescript(script tag with ts as the language inside .vue files but also inside .ts files)**
- Meteor(startup, methods, publish)
- Vue property decorator
- Vue router constructor
- functions for Cypress.io API
