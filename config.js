require('dotenv').config()

module.exports = {
  deployments: {
    netId137: {
      wbtc: {
        instanceAddress: {
          '0.0001': '',
          '0.001': '',
          '0.1': '',
          '1': '',
          '10': ''
        },
        tokenAddress: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
        symbol: 'WBTC',
        decimals: 8
      }
    }
  }
}
