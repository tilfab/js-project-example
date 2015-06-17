Using this example...
-------------

1. `npm install`

2. `node_modules/.bin/jspm install`


How it was set up...
--------------------

1. `npm init`

2. `npm install jspm --save-dev`  
Lock JSPM dependency for this project (if your global JSPM is upgraded)

3. `jspm init`  
Use Babel as ES6 transpiler

#### For React project

4. Go in to `config.js` add `"blacklist": []` to `babelOptions`-property  
Removes React from babel blacklist... will be removed as of React 0.17

5. `jspm install react`
