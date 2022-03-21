<template>
  <div class="home">
    <Banner />
    <Header1 />
    <Video />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Video from '@/components/Video'
import Header1 from '@/components/Header1'

export default {
  name: 'Home',
  components: {
    Banner,
    Video,
    Header1,
  },
}
</script>
