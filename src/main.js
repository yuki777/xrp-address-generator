// https://www.npmjs.com/package/ripple-keypairs
var keypairs = require('ripple-keypairs');
// https://www.npmjs.com/package/qrious
var qr       = require('qrious');

var secret    = keypairs.generateSeed();
var keypair   = keypairs.deriveKeypair(secret);
var address   = keypairs.deriveAddress(keypair.publicKey);
var addressQr = new qr({value: address});
var secretQr  = new qr({value: secret});

document.querySelector('#address').textContent = address;
document.querySelector('#secret').textContent = secret;
document.querySelector('#addressQr').setAttribute('src', addressQr.toDataURL());
document.querySelector('#secretQr').setAttribute('src', secretQr.toDataURL());
