<template>
  <v-app>
    <pageHeader />
    <v-main class="mt-16">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import pageHeader from '@/components/PageHeader.vue'
export default {
  name: 'App',
components:{ pageHeader },
  data: () => ({
    //
    cart:''
  }),
  methods:{

  },
  created(){
    this.$store.dispatch('get');
  },
  beforeDestroy(){
 
    
  }
};
</script>
