require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mEJIAuxHnE2HsvBATUIEBiTLrd-dN5X3',
      accounts: [
        'f2679263aadf9db7949246a5265f7cf0b0aece610ba4d84dcfc9304ccd050d0c',
      ],
    },
  },
}
