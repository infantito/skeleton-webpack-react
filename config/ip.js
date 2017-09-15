'use strict';

const os = require('os');

const ifaces = os.networkInterfaces();

let localhost;

Object.keys(ifaces).forEach((ifname) => {
  let alias = 0;

  return ifaces[ifname].forEach((iface) => {
    // iface.internal !== false
    if (iface.family !== 'IPv4' || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return '0.0.0.0';
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      // console.log(ifname + ':' + alias, iface.address);
      localhost = iface.address;

      return localhost;
    }
    // this interface has only one ipv4 adress
    // console.log(ifname, iface.address);
    localhost = iface.address;

    return localhost;
    // ++alias;
  });
});

module.exports = localhost;

