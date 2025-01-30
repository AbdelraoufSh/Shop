<template>
<v-row class="d-flex justify-center pt-10">
    <v-col cols="11">
        <v-row class="">
            <v-col cols="6" class="pr-6">
                <v-img height="70vh" src="~@/assets/2.jpg">

                </v-img>
            </v-col>
            <v-col class="d-flex flex-column" cols="6">
                <p class="text--text mb-2">{{$store.state.product.sub}}</p>
                <p class="third--text text-h6">{{$store.state.product.name}}</p>
                <p class="text--text">{{$store.state.product.desc}}</p>
                <v-divider class="mt-4"></v-divider>
                <v-row class="pb-6" >
                    <v-col cols="2" class="d-flex align-center">
                      <p class="ma-0 font-weight-medium secondary--text text-h6">${{$store.state.product.price}}</p>
                    </v-col>
                    <v-col cols="6">
                    </v-col>
                    <v-col cols="3" class="d-flex align-center pl-4">
                      <v-btn color="secondary" class="text-capitalize" @click="$store.commit('addtocart',$store.state.product),$store.commit('postcart')" >
                        Add to Cart
                      </v-btn>
                    </v-col>
                </v-row>
                <v-row></v-row>
            </v-col>
        </v-row>
    </v-col>
</v-row>
</template>
<script>
export default{
    data(){
        return{
        }
    },
    created(){
        this.$store.dispatch('getproduct');
    },
    mounted(){
    },
    beforeUpdate(){
    }
}
</script>