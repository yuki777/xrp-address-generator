const keypairs   = require('ripple-keypairs');
const api        = require('ripple-address-codec');
const qr         = require('qrious');

const secret     = keypairs.generateSeed();
const keypair    = keypairs.deriveKeypair(secret);
const address    = keypairs.deriveAddress(keypair.publicKey);
const xAddress   = api.classicAddressToXAddress(address, false)
const addressQr  = new qr({padding: 10, size: 200, value: address });
const xAddressQr = new qr({padding: 10, size: 200, value: xAddress });
const secretQr   = new qr({padding: 10, size: 200, value: secret  });

document.querySelector('#address').textContent = address;
document.querySelector('#xAddress').textContent = xAddress;
document.querySelector('#secret').textContent = secret;
document.querySelector('#addressQr').setAttribute('src', addressQr.toDataURL());
document.querySelector('#xAddressQr').setAttribute('src', xAddressQr.toDataURL());
document.querySelector('#secretQr').setAttribute('src', secretQr.toDataURL());
