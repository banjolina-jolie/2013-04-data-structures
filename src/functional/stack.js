var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  var index = 0;

  stack.add = function(value){
    storage[index] = value;
    size += 1;
    index += 1;
  };

  stack.remove = function(){
    var result = storage[index - 1];
    delete storage[index - 1];
    size -= 1;
    return result;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
