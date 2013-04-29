var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};


  stack.add = function(value){
    storage[size] = value;
    size += arguments.length;
  };

  stack.remove = function(){
    var result = storage[size -1];
    delete storage[size - 1];
    size -= 1;
    return result;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
