# The project
This project uses snippets for autocompletion and the language server protocol for the diagnostic(see below what this extension provides).

## Installation

## For Vscode
Run this command ```npm install```

Then you can run the projet with the menu : ```Run > Run without debugging```

### For Atom
You can configure the snippets provided for Atom in snippets/Atom by pasting them in the global snippet file of your local Atom in the menu : ```File > Snippets...```

Make sure to install the following languages packages for Atom :
- https://atom.io/packages/language-pug (if you set the snippets for pug)
- https://atom.io/packages/language-stylus (if you set the snippets for stylus)
- https://atom.io/packages/language-vue (if you set the snippets for pug or stylus)

## Github repositories reuse
- https://github.com/quanzaiyu/vscode-vue-pug-enhanced (to start with some already implemented pug snippets)
- https://github.com/AlanCezarAraujo/vs-code-stylus (for the grammar and snippets for stylus)
- https://github.com/vuejs/vetur (for the grammar of pug and detection of sublanguages inside a .vue file)

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
- functions for Mocha et Chai
- functions for les stubs Sinon
- functions for Cypress.io API

**Javascript (inside .js file)**
- Astronomy schema (Class.create, https://jagi.github.io/meteor-astronomy/)

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
