<template>
  <div class="container">
    <NavbarMenu />
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div>
            <label> Harga Satuan: </label>
            <input type="number" v-model="hargaSatuan" @input="hitungTotalHarga"  disabled />
            <br />
            <label> Jumlah: </label>
            <input type="number" min="1" v-model="jumlah" @input="hitungTotalHarga" />
            <br />
            <label> Total Harga: </label>
            <input type="number" v-model="totalHarga" disabled />
          </div>
        </div>
      </div>
    <FooterView />
  </div>
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue';
import FooterView from '@/components/Footer.vue';

export default {
    name: 'CartView',
    components: { 
      NavbarMenu,
      FooterView
     },
     data() {
      return {
        hargaSatuan: 15000,
        jumlah: 1,
        totalHarga: 0,
      };
    },
    methods: {
      async hitungTotalHarga() {
        this.jumlah == null;
        // Menggunakan setTimeout untuk mensimulasikan permintaan asynchronous
        await setTimeout(() => {
          if (this.jumlah == null) {
            this.jumlah = 1;
          }
          if (this.hargaSatuan && this.jumlah) {
            this.totalHarga = this.hargaSatuan * this.jumlah;
          }
        }, 200);
      }
    }
}
</script>

<style>

</style>