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

var doWhileLoop = function(array){
  
  
  
}