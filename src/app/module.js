'use strict';

var module = function(m){
    m.list = function() {
        return [0,1,2,3,4,5];
    }

    return m;
}({});

export { module };