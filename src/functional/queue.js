var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  var index = 0;

  queue.add = function(value){
    storage[size] = value;
    size += arguments.length;
  };

  queue.remove = function(){
    // var result = storage[index];
    delete storage[index];
    index += 1;
    size -= 1;
    // return result;

  };

  queue.size = function(){
    return size;
  };

  return queue;
};