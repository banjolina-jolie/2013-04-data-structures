var Queue = function(){
  this.storage = {};
  this.leng = 0;
  this.counter = 0;
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

var queue = new Queue();