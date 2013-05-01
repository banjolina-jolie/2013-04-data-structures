var Stack = function(){
  this.storage = {};
  this.leng = 0;
};

Stack.prototype.add = function(value){
  this.storage[this.leng] = value;
  this.leng += arguments.length;
};

Stack.prototype.remove = function(){
  var result = this.storage[this.leng -1];
  delete this.storage[this.leng - 1];
  this.leng -= 1;
  return result;
};

Stack.prototype.size = function(){
  return this.leng;
};

var stack = new Stack();