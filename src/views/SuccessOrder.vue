<template>
    <div class="container">
      <NavbarMenu />
      Sukses Order,mohon tunggu
      <FooterView />
    </div>
  </template>
  
  <script>
  import NavbarMenu from '@/components/NavbarMenu.vue';
  import FooterView from '@/components/Footer.vue';
  
  export default {
      name: 'SuccessOrder',
      components: { 
        NavbarMenu,
        FooterView,
  
       }
  }
  </script>
  
  <style>
  
  </style>