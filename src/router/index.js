import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import CartView from "../views/CartView.vue";
import NotFound from "../views/NotFound.vue";
import SuccessOrder from "../views/SuccessOrder.vue";
import FoodDetail from "../views/FoodDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "foods",
    component: FoodsView,
    meta: { title: 'List Foods' }
  },
  {
    path: "/foods/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/ordered",
    name: "ordered",
    component: SuccessOrder,
  },
  {
    path: "*",
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
