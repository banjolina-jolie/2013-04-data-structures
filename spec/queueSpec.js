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
    // did it really add what i told it to?
  });

  describe('#remove()', function() {
    it('should remove an item in queue' , function() {
      queue.add('a');
      queue.add('b');
      queue.remove();
      expect(queue.size()).to.equal(1);
    });

    it('should return newly removed item from the beginning of queue' , function() {
      queue.add('a');
      queue.add('b');
      expect(queue.remove()).to.equal('a');
    });

    it('should return the stuff' , function() {
      queue.add('a');
      queue.add('b');
      expect(queue.remove()).to.equal('a');
      expect(queue.remove()).to.equal('b');
    });


    it('should do the stuff' , function() {
      queue.add('a');
      queue.add('b');
      expect(queue.remove()).to.equal('a');
      expect(queue.remove()).to.equal('b');
      queue.add('c');
      queue.add('d');
      expect(queue.remove()).to.equal('c');
      expect(queue.remove()).to.equal('d');
    });

  });



  // describe('#size()', function() {
  //   it('should take one argument', function() {
  //     // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
  //     expect(queue.add.length).to.equal(1);
  //   });
  // });
});
