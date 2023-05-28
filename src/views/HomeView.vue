<template>
  <div class="container">
    <NavbarMenu />
    <HeroMenu />
    <BestProduct />
    <FooterView />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMenu from "@/components/NavbarMenu.vue";
import HeroMenu from "@/components/Hero.vue";
import FooterView from "@/components/Footer.vue";
import BestProduct from "@/components/BestProduct.vue";
import axios from 'axios';

export default {
  name: "HomeView",
  components: {
    NavbarMenu,
    HeroMenu,
    FooterView,
    BestProduct,
  },
  data(){
    return {
      products:[]
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    }
  },
  mounted() {
    const url = 'http://localhost:3000/best-products/';

    axios.get(url)
    .then((response) => this.setProduct(response.data))
    .catch((error) => console.log(error))
  },
};
</script>

<style>
.btn-success {
  background: #42b983;
}
</style>
