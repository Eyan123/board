<template>
  <v-app>

    <v-app-bar app>
      <AppHeader></AppHeader>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>

import AppHeader from '@/components/common/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      photos: []
    }
  },
  mounted() {

  }
  
}
  
</script>
