var queue  = require('fake-queue')();

var job = {
    to: 'pedro.teixeira@gmail.com'
  , subject: 'Oh hay!'
  , body: 'Hello world!'
};

console.log('Sending a job...');
queue.push('email', job);