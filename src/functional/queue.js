var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.add = function(value){
    queue[0] = value;
  };

  queue.remove = function(){
  };

  queue.size = function(){
    return Object.keys(queue).length - 3;
  };

  return queue;
};
