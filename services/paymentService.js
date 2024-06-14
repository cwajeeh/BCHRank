const bitcore = require('bitcore-lib-cash');

const createPaymentAddress = () => {
  const privateKey = new bitcore.PrivateKey();
  const address = privateKey.toAddress();
  return address.toString();
};

module.exports = createPaymentAddress;
