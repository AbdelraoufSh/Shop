<template>
  <v-row class="d-flex justify-center pt-8">
    <v-col cols="11">
      <v-row>
        <v-col cols="4" class="mb-3" v-for="(prod,i) in this.$store.state.products" :key="i">
          <v-card class="ground pb-5"  @click="[$router.push('/product/'+prod.name),$store.commit('postproduct',prod)]">
            <v-img  src="~@/assets/2.jpg"></v-img>
            <v-card-title class="third--text pt-3">
              {{ prod.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ prod.sub }}
            </v-card-subtitle>
            <v-card-actions>
              <v-row class="pl-4 pr-0">
                <v-col cols="2" class="d-flex align-center">
                  <p class="ma-0 font-weight-medium secondary--text text-h6">${{prod.price}}</p>
                </v-col>
                <v-col cols="4 mr-4">
                
                </v-col>
                <v-col cols="3">
                  <v-btn color="secondary" class="text-capitalize" @click.stop="$store.commit('addtocart',prod),$store.commit('postcart')" >
                    Add to Cart
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>

        </v-col>
        </v-row>
    </v-col>
  </v-row>
</template>
<script>

  export default {
    name: 'HomePage',
    data(){
      return{
      }
    },
    components: {
    },
    methods:{
    },
    beforeDestroy(){
    }
  }
</script>
