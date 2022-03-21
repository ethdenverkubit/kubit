const KubitContract = artifacts.require('KubitContract')

module.exports = function (deployer) {
  deployer.deploy(KubitContract)
}
