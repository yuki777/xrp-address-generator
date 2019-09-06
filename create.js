// https://www.npmjs.com/package/ripple-keypairs
var keypairs = require('ripple-keypairs');
var secret   = keypairs.generateSeed();
var keypair  = keypairs.deriveKeypair(secret);
var address  = keypairs.deriveAddress(keypair.publicKey);
console.log('address : ' + address);
console.log('secret  : ' + secret);
