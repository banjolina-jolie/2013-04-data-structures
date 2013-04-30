var Stack = function(){
  var stack = Object.create(Stack.stackMethods);
  stack.storage = {};
  stack.leng = 0;
  return stack;
};

Stack.stackMethods = {};

  Stack.stackMethods.add = function(value){
    this.storage[this.leng] = value;
    this.leng += arguments.length;
  };

  Stack.stackMethods.remove = function(){
    var result = this.storage[this.leng -1];
    delete this.storage[this.leng - 1];
    this.leng -= 1;
    return result;
  };

  Stack.stackMethods.size = function(){
    return this.leng;
  };