var cat = {
  name: 'Max',
  hello: function call() {
    console.log('Hello! ' + this.name + '!');
  }
};

console.log(cat.name); // Max
cat.hello(); // Hello! Max!
