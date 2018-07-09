var forLoop = function(array){
  
  for(var i = 0; i<25; i++){
    if(i === 1){
      array.push('I am 1 strange loop.')
    }
    else array.push("I am ${i} strange loops.")
  }
  
  return array;
  
}

var whileLoop = function(number){
  
  while(number > 0){
    console.log(number);
    number--;
  }
  
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
var doWhileLoop = function(array){
  
  do{
    array.pop();
  }
  while(maybeTrue() || array.length > 0);
  
}