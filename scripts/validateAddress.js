const bchaddr = require('bchaddrjs');

const validateAddress = (address) => {
  return bchaddr.isCashAddress(address);
};

module.exports = validateAddress;
