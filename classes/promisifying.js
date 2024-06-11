//without promise
//can lead to callback hell
function myOwnSetTimeout(callback, time) {
  setTimeout(function() {
    callback();
  }, time);
}
myOwnSetTimeout(function() {
  console.log('Hello');
}   , 1000);

//with promise
function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    });
    return p; 
}

const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log('timeout completed');
});