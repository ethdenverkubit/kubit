<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2"></v-col>

      <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4" class="mt-5">
        <div>
          <h1 class="display-1 font-weight-bold text-center">
            Mint a Video NFT
          </h1>
          <h3 class="mt-5">Upload file</h3>
          <v-card outlined style="border: dashed 2px grey;">
            <h4 class="grey--text font-weight-medium text-center mt-3">
              PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
            </h4>
            <input
              type="file"
              ref="file"
              @change="handleFileUpload($event)"
              id="file-input"
              style="display: none;"
            />
            <p class="text-center ma-10">
              <v-btn
                @click="$refs.file.click()"
                text
                class="text-capitalize blue--text text--darken-3 blue lighten-4"
                style="border-radius: 25px;"
              >
                choose file
              </v-btn>
            </p>
          </v-card>
          <v-row>
            <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
              <h3 class="mt-5">Put on marketplace</h3>
              <h5 class="grey--text">
                Enter price to allow users instantly purchase your NFT
              </h5>
            </v-col>
            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
              <v-switch value="true"></v-switch>
            </v-col>
          </v-row>
          <v-row class="mt-4">
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
              <v-card
                outlined
                style="border: solid 2px grey; border-radius: 20px;"
              >
                <div class="text-center ma-5">
                  <v-icon class="black--text" size="30px">
                    mdi-tag-outline
                  </v-icon>
                  <h4 class="mt-3">Fixed</h4>
                  <h4>Price</h4>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
              <v-card
                outlined
                style="border: solid 2px grey; border-radius: 20px;"
              >
                <div class="text-center ma-5">
                  <v-icon class="black--text" size="30px">
                    mdi-all-inclusive
                  </v-icon>
                  <h4 class="mt-3">Open for</h4>
                  <h4>bids</h4>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <h3>Price</h3>
              <v-row no-gutters>
                <v-select
                  @change="setCurrency('change', $event)"
                  @input="setCurrency('input', $event)"
                  :items="items"
                  v-model="currency"
                  label="Choose currency"
                ></v-select>
                <v-text-field
                  @change="setPrice('change', $event)"
                  @input="setPrice('input', $event)"
                  v-model="price"
                  outlined
                  dense
                ></v-text-field>
              </v-row>
              <h5>Service fee 0.0%</h5>
              <h5>You will receive 0 ETH</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <h3>Category</h3>
              <v-row no-gutters>
                <v-select
                  @change="setCategory('change', $event)"
                  @input="setCategory('input', $event)"
                  :items="categories"
                  v-model="category"
                  label="Choose category"
                ></v-select>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
              <h3 class="mt-5 blue--text">Unlock once purchased</h3>
              <h5 class="grey--text">
                Content will be unlocked after successful transaction
              </h5>
            </v-col>
            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
              <v-switch value="true"></v-switch>
            </v-col>
          </v-row>
          <h3 class="mt-5">Choose collection</h3>
          <v-row class="mt-4">
            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
              <v-card
                outlined
                style="border: solid 2px grey; border-radius: 20px;"
              >
                <div class="text-center ma-5">
                  <v-icon class="black--text" size="30px">
                    mdi-plus-circle
                  </v-icon>
                  <h4 class="mt-3">Create</h4>
                  <h5 class="grey--text font-weight-regular">ERC721</h5>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
              <v-card
                outlined
                style="border: solid 2px grey; border-radius: 20px;"
              >
                <div class="text-center ma-5">
                  <img
                    class="ml-2"
                    :src="require('../assets/mark.png')"
                    height="22px"
                  />
                  <h4 class="mt-3">KUBIT</h4>
                  <h5 class="grey--text font-weight-regular">Atc</h5>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <h3 class="mt-5">Title</h3>
          <v-text-field
            @change="setTitle('change', $event)"
            @input="setTitle('input', $event)"
            v-model="title"
            placeholder="eg A Musical Masterpiece"
          ></v-text-field>
          <h3 class="mt-5">Description(optional)</h3>
          <v-textarea
            outlined
            placeholder="e.g A white breed mamamal"
            v-model="description"
            @change="setDescription('change', $event)"
            @input="setDescription('input', $event)"
            type="text"
          ></v-textarea>

          <v-row>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
              <h3 class="mt-5">Background</h3>
              <v-text-field
                @change="setBackground('change', $event)"
                @input="setBackground('input', $event)"
                v-model="background"
              ></v-text-field>
              <p class="text-caption">e.g Yellow</p>
            </v-col>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
              <h3 class="mt-5">Color</h3>
              <v-text-field
                @change="setColor('change', $event)"
                @input="setColor('input', $event)"
                v-model="color"
              ></v-text-field>
              <p class="text-caption">e.g red</p>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <p class="text-center">
                <v-btn
                  outlined
                  text
                  width="32vw"
                  style="border-radius: 25px;"
                  x-large
                >
                  Show advanced settings
                </v-btn>
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
              <p>
                <v-btn
                  @click="submitFile()"
                  class="blue text-capitalize"
                  dark
                  outlined
                  large
                  text
                  style="border-radius: 25px;"
                >
                  <h3>Create Item</h3>
                </v-btn>
              </p>
            </v-col>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
              <h4 class="font-weight-regular grey--text mt-2 text-end">
                Unsaved changes
                <v-icon>mdi-help-circle-outline</v-icon>
              </h4>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" class="">
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
            <div style="position: fixed;" class="text-center">
              <h3 class="mt-5 ml-14 pl-2">Preview</h3>
              <v-flex>
                <v-card
                  outlined
                  width="30vw"
                  height="80vh"
                  style="
                    border: solid 2px grey;
                    border-radius: 18px;
                    position: fixed;
                  "
                  class="pt-14 pl-7 pb-14 ml-14"
                >
                  <v-card flat class="">
                    <v-responsive class-pt-4>
                      <img
                        height="600vh"
                        v-bind:src="imagePreview"
                        v-show="showPreview"
                      />
                    </v-responsive>
                  </v-card>

                  <h5 class="grey--text font-weight-medium text-center ma-14">
                    Upload file to preview your brand new NFT
                  </h5>
                </v-card>
              </v-flex>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import Web3 from 'web3'
import KubitContract from '../abis/KubitContract.json'

export default {
  data: () => ({
    items: ['ETH', 'USDC', ' USD'],
    categories: ['All', 'Films', 'Crypto', 'NFT', 'Gaming', 'Sport', 'Tiktok'],
    category: '',
    selectedFile: '',
    currency: '',
    price: '',
    title: '',
    description: '',
    background: '',
    color: '',
    file: '',
    showPreview: false,
    imagePreview: '',
    buffer: null,
    kubitContract: null,
    videosCount: 0,
    videos: [],
    account: "",
    currentHash: null,
    currentTitle: null,
  }),
  methods: {
    setDescription(type, content) {
      this.description = content
      console.log(type, content)
    },
    setTitle(type, content) {
      this.title = content
      console.log(type, content)
    },
    setBackground(type, content) {
      this.background = content
      console.log(type, content)
    },
    setColor(type, content) {
      this.color = content
      console.log(type, content)
    },
    setPrice(type, content) {
      this.price = content
      console.log(type, content)
    },
    setCurrency(type, content) {
      this.currency = content
      console.log(type, content)
    },
    setCategory(type, content) {
      this.category = content
      console.log(type, content)
    },
    async submitFile() {

      try {
        let formData = new FormData()

        formData.append('file', this.file)
        formData.append('description', this.description)
        formData.append('title', this.title)
        formData.append('background', this.background)
        formData.append('color', this.color)
        formData.append('currency', this.currency)
        formData.append('price', this.price)
        formData.append('category', this.category)

        const url = `http://localhost:3001/upload`
        //const url = `http://54.146.197.86:3001/upload`;
        //const url = `https://rivalian.herokuapp.com/upload`

        const res = await axios({
          method: 'post',
          url: url,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
          data: formData,
          headers: {
            'Content-Type': 'application/json',
          },
        })

        var data = res.data
        console.log('data in submit file')
        console.log(data)

        //this.$router.push('/nft')
      } catch (error) {
        console.log(error)
      }
    },

    async waitForConfirmation(algodClient, txId, timeout) {
      if (algodClient == null || txId == null || timeout < 0) {
        throw new Error('Bad arguments')
      }

      const status = await algodClient.status().do()
      if (status === undefined) {
        throw new Error('Unable to get node status')
      }

      const startround = status['last-round'] + 1
      let currentround = startround

      while (currentround < startround + timeout) {
        const pendingInfo = await algodClient
          .pendingTransactionInformation(txId)
          .do()
        if (pendingInfo !== undefined) {
          if (
            pendingInfo['confirmed-round'] !== null &&
            pendingInfo['confirmed-round'] > 0
          ) {
            //Got the completed Transaction
            return pendingInfo
          } else {
            if (
              pendingInfo['pool-error'] != null &&
              pendingInfo['pool-error'].length > 0
            ) {
              // If there was a pool error, then the transaction has been rejected!
              throw new Error(
                'Transaction ' +
                  txId +
                  ' rejected - pool error: ' +
                  pendingInfo['pool-error'],
              )
            }
          }
        }
        await algodClient.statusAfterBlock(currentround).do()
        currentround++
      }
      throw new Error(
        'Transaction ' + txId + ' not confirmed after ' + timeout + ' rounds!',
      )
    },

    async handleFileUpload(event) {
      this.file = event.target.files[0]

      let reader = new FileReader()

      reader.addEventListener(
        'load',
        function () {
          this.showPreview = true
          this.imagePreview = reader.result
        }.bind(this),
        false,
      )

      if (this.file) {
        if (/\.(jpe?g|png|gif|mp4)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file)
        }
      }

      this.buffer = await Buffer.from(this.file.name)
    },
    async loadAlgoSigner() {
      // Check if AlgoSigner is installed
      if (typeof AlgoSigner !== 'undefined') {
        /*            window.alert(
            "AlgoSigner is installed!"
          ); */
        // AlgoSigner not installed
      } else {
        window.alert('AlgoSigner is NOT installed.')
      }
    },
    async connectToWallet() {
      // Connect to AlgoSigner Wallet
      const AlgoSigner = window.AlgoSigner

      await AlgoSigner.connect({
        ledger: 'TestNet',
      })
    },
    /* async loadBlockchainData() {
      const AlgoSigner = window.AlgoSigner

      const accts = await AlgoSigner.accounts({
        ledger: 'TestNet',
      })
      console.log('accts')
      console.log(accts)
      //return JSON.stringify(accts, null, 2);
    }, */

    async loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.request({ method: 'eth_requestAccounts' })
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
      } else {
        window.alert(
          'Non-Ethereum browser detected. You should consider trying MetaMask!',
        )
      }
    },

    async loadBlockchainData() {
      const web3 = window.web3
      // Load account
      const accounts = await web3.eth.getAccounts()
      console.log("accounts here");
      console.log(accounts);
      this.account = accounts[0];
      // Network ID
      const networkId = await web3.eth.net.getId()
      const networkData = KubitContract.networks[networkId]
      if (networkData) {
        const kubitContract = new web3.eth.Contract(KubitContract.abi, networkData.address)
        this.kubitContract = kubitContract;
        const videosCount = await kubitContract.methods.videoCount().call()
        this.videosCount = videosCount;
        console.log("this.videosCount")
        console.log(this.videosCount)

        // Load videos, sort by newest
        for (var i = videosCount; i >= 1; i--) {
          const video = await kubitContract.methods.videos(i).call()
          this.videos = [...this.videos, video];
        }
        //Set latest video with title to view as default
        const latest = await kubitContract.methods.videos(videosCount).call()
        this.currentHash = latest.hash;
        this.currentTitle = latest.title;


        this.setState({ loading: false })
      } else {
        window.alert('DTube contract not deployed to detected network.')
      }
    },
  },

  async created() {
    await this.loadWeb3()
    //await this.loadAlgoSigner();
    //await this.connectToWallet();
    //await this.loadBlockchainData();
  },
}
</script>

<style></style>
