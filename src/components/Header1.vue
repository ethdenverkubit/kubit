<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-toolbar
      class=""
      flat
      style="position: relative !important;"
    >
      <v-container class="py-0 fill-height">
        <v-btn
          dark
          class="text-h6 font-weight-regular text-capitalize grey--text mt-6"
          text
          x-large
        >
          All
        </v-btn>
        <v-btn
          dark
          class="text-h6 font-weight-regular text-capitalize grey--text mt-6"
          text
          x-large
        >
          Learning
        </v-btn>
        <v-btn
          dark
          class="text-h6 font-weight-regular text-capitalize grey--text mt-6"
          text
          x-large
        >
          Crypto
        </v-btn>
        <v-btn
          dark
          class="text-h6 font-weight-regular text-capitalize grey--text mt-6"
          text
          x-large
        >
          NFT
        </v-btn>
        <v-btn
          dark
          class="text-h6 font-weight-regular text-capitalize grey--text mt-6"
          text
          x-large
        >
          Gaming
        </v-btn>
        <v-btn
          dark
          class="text-h6 font-weight-regular text-capitalize grey--text mt-6"
          text
          x-large
        >
          Sport
        </v-btn>
        <v-btn
          dark
          class="text-h6 font-weight-regular text-capitalize grey--text mt-6"
          text
          x-large
        >
          Tiktok
        </v-btn>
        <v-spacer />
        <v-btn
          to="/app"
          dark
          class="text-h6 indigo text-capitalize mt-6"
          text
          x-large
        >
          Trending
        </v-btn>
      </v-container>
    </v-toolbar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: 'Header1',
  data() {
    return {}
  },
  methods: {},
}
</script>
