var Queue = function(){
  var queue = Object.create(Queue.prototype);
  queue.storage = {};
  queue.leng = 0;
  queue.counter = 0;
  return queue;
};

Queue.prototype.add = function(value){
  this.storage[this.counter] = value;
  this.counter += 1;
  this.leng += 1;
};

Queue.prototype.remove = function(){
  var result = this.storage[this.counter-this.leng];
  delete this.storage[this.counter-this.leng];
  this.leng -= 1;
  return result;
};

Queue.prototype.size = function(){
  return this.leng;
};