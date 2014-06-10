window.ObservableScope = function(){

    var DELAY = 100;
    var scope = this;

    var equals = function(val1, val2){
        return JSON.stringify(val1) === JSON.stringify(val2);
    };

    scope.watch = function(key, callback){
        var value = scope[key];
        var interval = setInterval(function(){
            if(!equals(value, scope[key])){
                callback(scope[key], value);
                value = scope[key];
            }
        }, DELAY);
        return function(){
            clearInterval(interval);
        };
    };

    return scope;
};