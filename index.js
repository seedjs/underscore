/*
  Uncomment this exports line if you want to be able to 
  use underscore as advertised
  
  USAGE:
    var seed = require('seed');
    seed.require('underscore');
  
*/
// ..........................................................
// FULL DEVELOPMENT VERSION
// 
// exports._ = module.exports = require('./underscore')._;

// ..........................................................
// MINIFIED VERSION
// 
// exports._ = module.exports = require('./underscore-min')._;


/*
  The following exports line allows you to set the underscore
  functions to a var of your choosing.
  
  USAGE:
    var seed = require('seed');
    var Underscore = seed.require('underscore');
  
*/
// ..........................................................
//  FULL DEVELOPMENT VERSION
// 
// exports = module.exports = require('./underscore')._;

// ..........................................................
// MINIFIED VERSION
// 
exports = module.exports = require('./underscore-min')._;