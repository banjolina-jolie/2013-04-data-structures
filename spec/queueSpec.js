describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });

  // Any queue implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).to.be.a('function');
    expect(queue.remove).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('passing a single argument at a time should increase the size by 1', function() {
      queue.add('a');
      expect(queue.size()).to.equal(1);
    });

    it('passing multiple arguments should increase size by number of arguments passed', function() {
      queue.add('b', 'c');
      expect(queue.size()).to.equal(2);
    });
  });

  describe('#remove()', function() {
    it('should remove an item in queue' , function() {
      queue.add('a');
      queue.remove();
      expect(queue.size()).to.equal(0);
      });

    it('should return newly removed item' , function() {
      queue.add('a');
      expect(queue.remove()).to.equal('a');
      });

    });



  // describe('#size()', function() {
  //   it('should take one argument', function() {
  //     // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
  //     expect(queue.add.length).to.equal(1);
  //   });
  // });
});
