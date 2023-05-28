<template>
  <div class="container">
    <NavbarMenu />
    Anda Tersesat tuan muda 
    Kembali ke <br> <router-link to="/" class="btn btn-success">Beranda</router-link>
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
      FooterView,
    }
}
</script>

<style>

</style>