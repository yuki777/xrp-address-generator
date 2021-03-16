const keypairs = require('ripple-keypairs');
const api      = require('ripple-address-codec');
const secret   = keypairs.generateSeed();
const keypair  = keypairs.deriveKeypair(secret);
const address  = keypairs.deriveAddress(keypair.publicKey);
const xaddress = api.classicAddressToXAddress(address, false)
console.log(JSON.stringify({
  address: address,
  xaddress: xaddress,
  secret: secret
}));
