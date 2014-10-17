> 
## Getting Started

> [Yeoman](http://yeoman.io) generator

> 
### What is Yeoman?

> 
#### Trick question. It's not a thing. It's this guy

![](http://i.imgur.com/JHaAlBJ.png)

> 
#### Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

> 
#### Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

> 
### $ `npm install -g yo`


> 
#### To know more about yeoman go through http://yeoman.io/

> 
# generator-nodsem
* * *
> 
#### A node.js module scaffolding express based web application. The generator gives an option to choose from a set of options for each layer as described below

Layer | Available Option
--- | --- 
*UI* | `Semantic/Bootstrap`
*MVM/MVVM* | `Ember/Angular`
*Data Base* | `Mongo / Mysql / Sqlite`
*Test* | `Mocha,Grunt` 
*Code Analysis* | `Plato`
*Documentation* | `Doccu`
*Code Coverage* | `Instanbul`

> 
### Semantic

> 

#### Semantic are a group of css, fonts, images, and javascript which make up a single element. Semantic UI elements are stand-alone and only require their own assets to function correctly.

> 
#### For more info please look in to http://semantic-ui.com/

> 
### Bootstrap 

> 
#### Bootstrap is a free collection of tools for creating websites and web applications. It contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.Bootstrap is compatible with the latest versions of all major browsers. It gracefully degrades when used on older browsers such as Internet Explorer 8.

> 
#### For more info please look in to http://getbootstrap.com/

> 
### Mocha  

> 
#### Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

> 
#### For more info please look in to http://visionmedia.github.io/mocha/

> 
### Grunt

> 
#### The Grunt ecosystem is huge and it's growing every day with literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort.It is used for code analysis, code coverage and to generate report for the project.

> 
#### For more info please look in to http://gruntjs.com/

> 
### Plato 

> 
#### Plato is a javaScript source code visualization, static analysis,complexity and a code analysis tool.

> 
#### For more info please look in to https://github.com/jsoverson/grunt-plato

> 
### doccu 

> 
#### Doccu is a grunt plug-in which is used to generate the document of the project.

> 
### instanbul

> 
#### instanbul is a grunt plugin to enforce coverage thresholds.

> 
#### For more info please look in to https://github.com/taichi/grunt-istanbul 

> 
## Installation
* * *
> 
#### To install generator-nodsem from npm, run:

> 
### $ `npm install -g generator-nodsem`

> 
#### Finally, we need to create the actual project, so navigate to the folder of your choosing and run:

> 
### $ `yo nodsem`

> 
### Unit testing for Emberjs

> 
#### This generator will support unit testing for emberjs frame work.Their will be tests folder inside public folder for unit testing.For checking unit test just add /test in postfix for the url present in address bar.

> 
### Running the grunt file
* * *
> 
#### Navigate to the project folder and run grunt analyze then three folder will generate in your project

> 
#### 1. `docs` folder

> 
#### This folder will have documentation of the project created.

> 
#### 2. `report` folder

> 
#### This folder will have code analysis for your project.

> 
#### 3. `coverage` folder

> 
#### This folder is generated inside test folder , it will give information about code coverage of your project.

> 
### Configuration 
* * *
> 
#### Mysql: default database is nodsem 
#### Username:root
#### Password:root
 
> 
#### Mongodb: default port is 27100

> 
#### After the project is generated,the project will run on [http://localhost:3000](http://localhost:3000)

> 
### Contact
* * *
Prashanth Karnam <prashanthk@srsconsultinginc.com>
Pradeep M <pradeepm@srsconsultinginc.com>