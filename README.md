# Green recipes

Website [www.green-recipes.com](www.green-recipes.com)

A website written in Clojure and ClojureScript, using Enlive for templates and Postgresql as datastore.

### Main functionalities

* filtering recipes by ingredient
* grouping recipes by recipe category

### Usage

It is necessary to create database with name zelenerecepty. 
It's also necessary to create user in Postgresql with name dajanka and password zelenerecepty before running the aplication.

To start application, open command line, navigate to the application folder and then:

* to create database for recipes, type in command line 
`cat schema.sql | psql zelenerecepty`

* launch `lein repl` from the command line 

* to fill database with the recipes, type in repl
```clojure
(use 'zelene-recepty.db-setup)
```
```clojure
(use 'zelene-recepty.db)
```
```clojure
(setup-db db/zelene-recepty-db)
```

* to start web-application type in repl
```clojure 
(use 'zelene-recepty.dev)
 ```
and type [http://localhost:3000](http://localhost:3000) in your browser address bar


### Future functionalities

* adding recipes via web UI
* filtering recipes by various conditions

## License

Copyright © 2014 Dajanka

