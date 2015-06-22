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

#### Karma, Jasmine, PhantomJS

1. `npm install karma --save-dev`

2. `npm install karma-jasmine karma-jspm karma-phantomjs-launcher npm install karma-phantomjs-shim --save-dev`

3. `node_modules/.bin/karma init`  
See [Karmas configuration](http://karma-runner.github.io/0.12/intro/configuration.html)

4. Edit `karma.conf.js`

        frameworks: ['jasmine', 'jspm', 'phantomjs-shim'],
        
        files: [],
        
        jspm: {
            loadFiles: ['test/**/*.js'],
            config: "src/config.js",
            packages: "src/jspm_packages/",
        },
        
        proxies: {
          '/base/jspm_packages/': '/base/src/jspm_packages/'
        },

