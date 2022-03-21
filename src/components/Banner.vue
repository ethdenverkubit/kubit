<template>
  <div :style="myStyle" id="wrapper">
    <v-container>
      <v-row justify="center" class="py-16 my-0">
        <v-col cols="12" md="7" lg="6" class="text-center">
          <div>
            <h1 class="black--text">
              Discover, watch and
            </h1>
            <h1 class="black--text">
              share great videos
            </h1>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Banner',

  components: {},

  data: () => ({
    myStyle: {
      backgroundColor: '#16a085',
    },
  }),

  setup() {},
}
</script>
