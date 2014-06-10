// Initialize an observable scope
var scope = new ObservableScope();

// Create a variable into the observable scope
scope.obj = 1;

// Active the watcher and return a watcher killing function
var killTheWatcher = scope.watch('obj', function(val, oldVal){
    console.log('Changed : ', val, oldVal);
});

// Update the value every 0.5 second
setInterval(function(){
    scope.obj++;
}, 500);

// Kill the watcher after 5 seconds
setTimeout(function(){
    killTheWatcher();
}, 5000);