<template>
  <v-app>
    <v-main>
      <NavBar v-if="!$route.meta.hideNavbar" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar
  },
  name: 'App',
  computed: {
    isDashboardView() {
      return this.$route.name === 'dashboard';
    }

  },

  data: () => ({
    //
  }),
}
</script>
