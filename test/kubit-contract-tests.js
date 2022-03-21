const { assert } = require('chai')
const KubitContract = artifacts.require('./KubitContract.sol')
require('chai').use(require('chai-as-promised')).should()

contract('KubitContract', ([deployer, author, donator]) => {
  let kubitContract
  before(async () => {
    kubitContract = await KubitContract.deployed()
  })

  describe('deployment', () => {
    it('should be an instance of KubitContract', async () => {
      const address = await kubitContract.address
      assert.notEqual(address, null)
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, undefined)
    })
  })

  describe('Videos', () => {
    let result
    const hash = 'abcd1234'
    const title = 'This is a test title'
    const thumbnail =
      'https://ipfs.io/ipfs/bafkreiheds3nc3zrvkh4rxocmwohhs3obaqer6ptonxxbjcmpqwyom2kba'
    const description = 'This is a test video'
    let videoCount
    before(async () => {
      result = await kubitContract.uploadVideo(
        hash,
        title,
        thumbnail,
        description,
        {
          from: author,
        },
      )
      videoCount = await kubitContract.videoCount()
    })

    it('Check Video', async () => {
      let video = await kubitContract.videos(1)
      assert.equal(videoCount, 1)
      const event = result.logs[0].args
      assert.equal(event.hash, hash)
      assert.equal(event.title, title)
      assert.equal(event.thumbnail, thumbnail)
      assert.equal(event.description, description)
    })

    it('Allow users to donate', async () => {
      let oldAuthorBalance
      oldAuthorBalance = await web3.eth.getBalance(author)
      oldAuthorBalance = new web3.utils.BN(oldAuthorBalance)
      result = await kubitContract.donateVideoOwner(videoCount, {
        from: donator,
        value: web3.utils.toWei('1', 'Ether'),
      })

      const event = result.logs[0].args
      let newAuthorBalance
      newAuthorBalance = await web3.eth.getBalance(author)
      newAuthorBalance = new web3.utils.BN(newAuthorBalance)

      let donateVideoOwner
      donateVideoOwner = web3.utils.toWei('1', 'Ether')
      donateVideoOwner = new web3.utils.BN(donateVideoOwner)

      const expectedBalance = oldAuthorBalance.add(donateVideoOwner)
      assert.equal(newAuthorBalance.toString(), expectedBalance.toString())
    })
  })
})
