module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    ropsten: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '3',
      gas: 4600000,
      from: 'd7d957ce9c6dd7b5e6cb8b28b35bc2bd4774bc3a',
    },
  },
};
