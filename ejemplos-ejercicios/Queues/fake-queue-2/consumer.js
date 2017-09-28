var queue = require('fake-queue')();

queue.pop('email', function(job, done) {
	console.log('Consuming...',job, done)
  // actually send the email (not done here);

  // call done, with no error, or done(err) if there is an error
  done();
});