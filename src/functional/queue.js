var makeQueue = function(){
  var storage = {};
  var size = 0;
  var queue = {};
  var index = 0;

  queue.add = function(value){
    storage[index] = value;
    index += 1;
    size += 1;
  };

  queue.remove = function(){
    var result = storage[index-size];
    delete storage[index-size];
    size -= 1;
    return result;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};