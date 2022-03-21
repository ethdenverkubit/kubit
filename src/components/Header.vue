<template>
  <v-app-bar app absolute class="" color="" flat elevate-on-scroll>
    <v-container class="fill-height py-0">
      <!-- Logo -->
      <Logo />
      <v-btn class="ma-1" color="grey" plain>
        Feed
      </v-btn>
      <v-btn
        rounded
        color="primary"
        dark
        target="_blank"
        href="https://www.wrappixel.com/templates/nextkit-nuxtjs-free-uikit/"
        elevation="0"
      >
        Discover
      </v-btn>
      <v-spacer />
      <v-text-field
        v-model="search"
        flat
        hide-details
        solo-inverted
        style="max-width: 300px;"
      />
      <v-spacer />
      <v-btn class="ma-2" outlined color="indigo">
        Connect Wallet
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Header',

  components: {
    Logo,
  },

  data: () => ({
    isActive: false,
    search: 'Search Creators...',
    last: 'Doe',
  }),

  setup() {},
}
</script>
