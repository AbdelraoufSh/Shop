<template>
<v-row class="d-flex justify-center pt-14 ">
  <v-col cols="8">
    <v-card>
      <v-row class="hp">
        <v-col cols="5" class="pl-4">
          <p class="ma-0">Item</p>
        </v-col>
        <v-col cols="2">
          <p class="ma-0">Quantity</p>
        </v-col>
        <v-col cols="3">
          <p class="ma-0">Price</p>
        </v-col>
        <v-col cols="2" class="pl-4"> 
          <p class="ma-0">Action</p>
        </v-col>
      </v-row>
      <v-row class="bground text--text" v-for="(prod,i) in $store.state.cart" :key="i">
        <v-col cols="5" class="d-flex align-center pl-4">
          <p class="ma-0">{{prod.name}}</p>
        </v-col>
        <v-col cols="2" class="d-flex align-center pl-8">
          <p class="ma-0">{{prod.quantity}}</p>
        </v-col>
        <v-col cols="3" class="d-flex align-center pl-4">
          <p class="ma-0">${{(prod.price)*(prod.quantity)}}</p>
        </v-col>
        <v-col cols="2" class="d-flex align-center pl-0"> 
          <v-btn class="px-2 py-1 text-capitalize ground" @click="$store.commit('remove',i),$store.commit('postcart')">
            Remove
          </v-btn>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-divider ></v-divider>
  
        </v-col>
      </v-row>
      <v-row class="bground py-2">
        <v-col cols="5" class="d-flex align-center pl-4">
          <p class="ma-0 font-weight-bold">Total Amount</p>
        </v-col>
        <v-col cols="2" class="d-flex align-center pl-8">
          <p class="ma-0 font-weight-bold">{{$store.state.counter}}</p>
        </v-col>
        <v-col cols="3" class="d-flex align-center pl-4">
          <p class="ma-0 font-weight-bold">${{$store.state.TotalPrice}}</p>
        </v-col>
        <v-col cols="2">
  
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
    </v-card>
    <v-form v-model="valid" ref="form">
      <v-row class="ma-0 pt-6 pb-2">
        <v-col cols="12" class="d-flex justify-center pa-0">
          <p class="text-h6 ma-0 mr-2">Payment Details</p> <v-icon color="secondary">mdi-pen</v-icon>
        </v-col>
      </v-row>
      <v-row class=" ">
        <v-col cols="6" class="py-0 pl-0">
            <v-text-field color="secondary" :rules="[rules.require]" v-model="user.firstName" class="ma-0"  outlined label="First Name"></v-text-field>
        </v-col>
        <v-col cols="6" class="py-0 pr-0">
            <v-text-field color="secondary" :rules="[rules.require]" v-model="user.lastName"   class="ma-0"  outlined label="Last Name"></v-text-field>
        </v-col>
        <v-col cols="12" class="pa-0">
            <v-text-field  color="secondary" :rules="[rules.require,rules.email]" v-model="user.Email"  class="ma-0 pa-0" outlined label="Email"></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 pr-1">
          <v-text-field outlined color="secondary" :rules="[rules.require]" v-model="user.address" label="Address" class="ma-0"></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 px-1">
          <v-text-field outlined color="secondary" :rules="[rules.require]" v-model="user.city" label="City" class="ma-0"></v-text-field>
        </v-col>
        <v-col cols="2" class="pa-0 px-1">
          <v-text-field outlined color="secondary" :rules="[rules.require]" v-model="user.state" label="State" class="ma-0"></v-text-field>
        </v-col>
        <v-col cols="2" class="pa-0 pl-1">
          <v-text-field outlined color="secondary" :rules="[rules.code]" :counter="5" v-model="user.zip" label="Zip" class="ma-0"></v-text-field>
        </v-col>
        <v-col cols="12" class="pa-0 pb-6 ma-0 d-flex justify-center">
          <v-btn :loading="$store.state.res" @click="post" color="secondary" class="px-10 text-capitalize ma-0 py-5">Pay Now</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-col>
</v-row>
</template>
<script>
export default{
  data: () => ({
    user:{
        firstName:'',
        lastName:'',
        Email:'',
        address:'',
        city:'',
        state:'',
        zip:''
      },
      valid:true,
      rules:{
        require:v => !!v || 'Required',
        email:v=> /.+@.+/.test(v) || 'E-mail must be valid',
        code:v=> v.length===5 || 'wrong digits'
      }
  })
  ,
    methods:{
      post(){
        this.$refs.form.validate();
        if(this.valid)
        this.$store.state.res=true,this.$store.commit('PostUser',this.user),this.$refs.form.reset();
      }
    }
}
</script>
