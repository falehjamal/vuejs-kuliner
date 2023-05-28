<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col d-flex ml-3">
        <h3>Menu <strong> Favorit</strong><hr/>
        </h3>
      </div>
      <div class="col justify-contet-center align-self-center">
        <router-link to="/foods" class="btn btn-sm btn-success"
          ><b-icon-search></b-icon-search
              > Lihat Semua</router-link
        >
      </div>
    </div>

    <div class="row mt-3 p-2">
      <div class="col-lg-4 mt-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="'images/'+product.gambar" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ product.nama }}</h5>
            <p class="card-text">Harga : Rp {{ product.harga }}</p>
            <router-link to="/foods" class="btn btn-sm btn-success"><b-icon-cart></b-icon-cart
              > Pesan</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "BestProduct",
  data(){
    return {
      products:[]
    } 
  },
  mounted() {
    const url = 'http://localhost:3000/best-products/';

    axios.get(url)
    .then((response) => this.products = response.data)
    .catch((error)=>(console.log(error)));
  },
};
</script>

<style></style>
