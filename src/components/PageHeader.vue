<template>
<v-app-bar fixed>
    <v-row class="d-flex justify-center align-center ">
        <v-col cols="11">
            <v-row class="d-flex justify-space-between py-4 align-center">
                <v-col class="d-flex align-center" cols="4">
                    <v-icon large color="secondary">
                        mdi-cart
                    </v-icon>
                    <p class="text-h6 ma-0 ml-1 mr-1 third--text font-weight-medium">Shopping Cart</p>
                    <v-btn  @click="rout"  class="transparent text-capitalize px-2" outlined>
                        <p class="ma-0 mt-1 fourth--text font-weight-light">Products</p>
                    </v-btn>
                </v-col>
                <v-col cols="3" class="d-flex align-center flex-row-reverse">
                    <v-btn color="primary" class="text-capitalize" @click="$router.push('/basket')">
                        Basket ({{ $store.state.count}} item)
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-app-bar>
</template>
<script>
export default{
    methods:{
        rout(){
            if(this.$router.currentRoute.path!='/')
            this.$router.push('/')
        }
    }
}
</script>
<style>
</style>