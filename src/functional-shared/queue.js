var makeQueue = function(){
  var queue = {};
  queue.storage = {};
  queue.leng = 0;
  queue.counter = 0;
  extend(queue, makeQueue.queueMethods);
  return queue;
};

  makeQueue.queueMethods = {};

  makeQueue.queueMethods.add = function(value){
    this.storage[this.counter] = value;
    this.counter += 1;
    this.leng += 1;
  };

  makeQueue.queueMethods.remove = function(){
    var result = this.storage[this.counter-this.leng];
    delete this.storage[this.counter-this.leng];
    this.leng -= 1;
    return result;
  };

  makeQueue.queueMethods.size = function(){
    return this.leng;
  };

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};