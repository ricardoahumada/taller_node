var InfiniteLoop = require('infinite-loop');

var il = new InfiniteLoop;

var counter = 0;
//task you want to run infinitely
function addOne(id) {
  counter++;
  console.log(counter,id);
}

//add it by calling .add
il.add(addOne, ['anId']);

il.onError(function(error){
    console.log('Error:',error);
});

il.run();