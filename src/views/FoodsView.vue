<template>
  <div class="container">
    <NavbarMenu />
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-4 input-group mb-3">
          <input
            type="text"
            v-model="search"
            @keyup="setSearch"
            class="form-control"
            placeholder="Cari Makanan.."
            aria-label="cari"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text bg-light" id="basic-addon2"
            ><b-icon-search></b-icon-search
          ></span>
        </div>
      </div>

      <div v-if="products.length === 0">
        <div class="row">
          <div class="col ml-2">
            <div class="row justify-content-center align-self-center">
              <center>Yahh, makanan yang kamu cari lagi tidak ada nihh</center>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 d-flex align-items-stretch"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card">
            <img :src="'images/' + product.gambar" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ product.nama }}</h5>
              <p class="card-text">Harga : Rp {{ product.harga }}</p>
              <router-link :to="'/foods/'+product.id" class="btn btn-sm btn-success"
                ><b-icon-cart></b-icon-cart> Pesan</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterView />
  </div>
</template>
  
  <script>
// @ is an alias to /src
import FooterView from "@/components/Footer.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavbarMenu,
    FooterView,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setSearch() {
      const url = "http://localhost:3000/products?q=" + this.search;

      axios.get(url).then((response) => (this.products = response.data));
    },
  },
  mounted() {
    const url = "http://localhost:3000/products";

    axios.get(url).then((response) => (this.products = response.data));
  },
};
</script>
  