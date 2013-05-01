var makeStack = function(){
  var stack = {};
  stack.storage = {};
  stack.leng = 0;
  extend(stack, makeStack.stackMethods);
  return stack;
};

makeStack.stackMethods = {};

  makeStack.stackMethods.add = function(value){
    this.storage[this.leng] = value;
    this.leng += arguments.length;
  };

  makeStack.stackMethods.remove = function(){
    var result = this.storage[this.leng -1];
    delete this.storage[this.leng - 1];
    this.leng -= 1;
    return result;
  };

  makeStack.stackMethods.size = function(){
    return this.leng;
  };

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};