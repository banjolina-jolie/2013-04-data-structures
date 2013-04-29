describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).to.be.a('function');
    expect(stack.remove).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('passing a single argument at a time should increase the size by 1', function() {
      stack.add('a');
      expect(stack.size()).to.equal(1);
    });

    it('passing multiple arguments should increase size by number of arguments passed', function() {
      stack.add('b', 'c');
      expect(stack.size()).to.equal(2);
    });
  });

  describe('#remove()', function() {
    it('should remove an item in stack' , function() {
      stack.add('a');
      stack.add('b');
      stack.remove();
      expect(stack.size()).to.equal(1);
      });

    it('should return newly removed item from the end of stack' , function() {
      stack.add('a');
      stack.add('b');
      expect(stack.remove()).to.equal('b');
      });
    });

});
