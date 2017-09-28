var winston = require('winston');

winston.log('info', 'Hello distributed log files!');
winston.info('Hello again distributed logs');

winston.level = 'debug';
winston.log('debug', 'Now my debug messages are written to console!');

winston.add(winston.transports.File, { filename: './logs/somefile.log' });
winston.remove(winston.transports.Console);

winston.log('info', 'Hello distributed log files 2!');
winston.info('Hello again distributed logs 2');
