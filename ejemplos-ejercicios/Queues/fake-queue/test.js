var queue  = require('./')()
  , assert = require('assert');

exports.push_then_pop = function(done) {
  var job = {a: 1, b: 2}
    , cb1 = false;
  
  queue.push('test1', job);
  queue.pop('test1', function(retjob, done) {
    assert.ok(! cb1);
    assert.eql(job, retjob);
    cb1 = true;
    done();
  });
  
  done(function() {
    assert.ok(cb1);
  })
};

exports.pop_then_push = function(done) {
  var job = {a: 2, b: 2}
    , cb1 = false;
  
  queue.pop('test2', function(retjob, done) {
    assert.ok(! cb1);
    assert.eql(job, retjob);
    cb1 = true;
    done();
  });
  queue.push('test2', job);
  
  done(function() {
    assert.ok(cb1);
  })
};

exports.pop_no_push = function(done) {
  var job = {a: 3, b: 2}
    , cb1 = false;
  
  queue.pop('test3', function(retjob, done) {
    assert.ok(! cb1);
    assert.eql(job, retjob);
    cb1 = true;
    done();
  });

  done(function() {
    assert.ok(! cb1);
  })
};

exports.error_repost = function(done) {
  var job = {a: 4, b: 2}
    , cb1 = false
    , cb2 = false;
  
  queue.push('test4', job);
  queue.pop('test4', function(retjob, done) {
    assert.ok(! cb1);
    assert.eql(job, retjob);
    cb1 = true;
    done(new Error('oops!'));
  });
  queue.pop('test4', function(retjob, done) {
    assert.ok(! cb2);
    cb2 = true;
    done();
  });


  done(function() {
    assert.ok(cb1);
    assert.ok(cb2);
  })
};