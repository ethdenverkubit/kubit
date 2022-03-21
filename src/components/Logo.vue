<template>
  <router-link to="/">
    <v-img
      alt="Kubit Logo"
      :src="require('@/assets/logo.png')"
      class="mr-5"
      contain
      width="68"
      max-width="68"
      transition="scale-transition"
      @click="$vuetify.goTo(0)"
    />
  </router-link>
</template>

<script>
export default {
  name: 'Logo',

  data() {
    return {}
  },
}
</script>
