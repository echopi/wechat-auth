'use strict';

// had enabled by egg
// exports.static = true;
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.io = {
  enable: true,
  package: 'egg-socket.io',
};
