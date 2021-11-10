/* global artifacts */
const Migrations = artifacts.require('Migrations')

module.exports = function(deployer) {
  if(deployer.network === 'matic') {
    return
  }
  deployer.deploy(Migrations)
}
