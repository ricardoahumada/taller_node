var relay = require('./event_relay');

for(var i = 0 ; i < 10; i ++) {
  console.log('pushing work %d ...',i);
  var payload ={id: i, event: 'door opened', when: Date.now()};
  relay.push(payload,function (err) {
    if (err) console.error('Error deleting job', err.stack);
    else console.log('Finished!')
  });
}
