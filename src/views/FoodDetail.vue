<template>
  <div class="container">
    <NavbarMenu />
    <div class="container mt-5">
      <div class="jumbotron bg-light">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Isi</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">Nama</th>
      <td>{{product.nama}}</td>
    </tr>
    <tr>
      <th scope="row">ID</th>
      <td>{{product.id}}</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
    <FooterView />
  </div>
</template>
  
  <script>
// @ is an alias to /src
import FooterView from "@/components/Footer.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import axios from 'axios';

export default {
  name: "FoodsDetail",
  components: {
    NavbarMenu,
    FooterView,
  },
  data() {
    return {
      product:{},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data
    },
  },
  mounted() {
    const url = "http://localhost:3000/products/"+this.$route.params.id;

    axios.get(url).then((response)=>(this.product=response.data))


  },
};
</script>
  