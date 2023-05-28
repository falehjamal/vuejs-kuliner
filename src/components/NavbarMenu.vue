<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm rounded fixed">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        ><img src="../../public/jk.jpg" height="40"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link to="/" class="nav-link">Beranda</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link to="/foods" class="nav-link">Makanan</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <!-- <a class="nav-link"><i class="bi bi-bag"></i>Tes</a> -->
            <!-- <router-link to="/cart" class="nav-link">
              Keranjang <b-icon-bag></b-icon-bag
              ><span
                class="position-absolute badge rounded-pill bg-success text-light"
              >
                3
              </span>
            </router-link> -->
          </li>
          <li class="nav-item dropdown">
            <!-- <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Keranjang</a> -->
            <router-link to="/cart" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Keranjang <b-icon-bag></b-icon-bag
              ><span
                class="position-absolute badge rounded-pill bg-success text-light"
              >
                3
              </span>
            </router-link>
              <div class="container dropdown-menu fade-up">
                <ul class="navbar-nav d-block">
                  <li class="nav-item">Tes</li>
                  <li>Tes</li>
                  <li>Tes</li>
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMenu",
};
</script>

<style scoped>
  .navbar .dropdown-menu-end{ right:0; left: auto;  }
	.navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
	/* .navbar .nav-item:hover .nav-link{ color: #fff;  } */
	.navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
	.navbar .dropdown-menu.fade-up{ top:180%;  }
	.navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg); }
</style>
