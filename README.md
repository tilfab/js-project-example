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

#### React

1. Go in to `src/config.js` add `"blacklist": []` to `babelOptions`-property  
Removes React from babel blacklist... will be removed as of React 0.17

2. `jspm install react`

#### Karma, Jasmine

1. `npm install karma --save-dev`

2. `npm install karma-jasmine karma-jspm --save-dev`

3. `./node_modules/.bin/karma init` See [http://karma-runner.github.io/0.12/intro/configuration.html](Karmas configuration)

4. Edit `karma.conf.js`

        frameworks: ['jasmine', 'jspm'],
        
        // list of files / patterns to load in the browser
        files: [],
        
        jspm: {
            loadFiles: ['src/app/**/*.js', 'test/**/*.js'],
            config: "src/config.js",
            packages: "src/jspm_packages/",
        },
        
        proxies: {
          '/base/jspm_packages/': '/base/src/jspm_packages/'
        },

