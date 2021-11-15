<template>
  <div id="app">
    <div class="wrapper">
      <router-view></router-view>
      <div class="content-wrapper">
        <div class="container">
          <HeaderVue />
          <div class="main">
            <MenuVue />

            
          </div>
        </div>
      </div>
      <FooterVue />
    </div>
  </div>
</template>

<script>

import HeaderVue from '@/layouts/components/Header.vue';
import MenuVue from '@/layouts/components/Menu.vue';
import FooterVue from '@/layouts/components/Footer.vue';

export default {
  name: "App",
  mounted() {
    axios.get("templates/-_RLsEGjof6i/data").then((response) => {
      this.clothesFromBE = response.data;
    });
    axios.get("templates/q3OPxRyEcPvP/data").then((response) => {
      this.accessesFromBE = response.data;
    });
  },
  data() {
    return {
      search: "",
      userFromBE: {},
    };
  },
  
  methods: {
    showAllBtn() {
      this.selectedTab = 0;
    },
    showClothesBtn() {
      this.selectedTab = 1;
    },
    showAccessesBtn() {
      this.selectedTab = 2;
    },
    getScore(scoreFromUserFromBE) {
      this.orderPrice = scoreFromUserFromBE;
    },
    orderToUser(cost) {
      this.orderPrice -= cost;
    },
    searchInApp(searchStr) {
      this.search = searchStr;
    },
  },
  components: {
    HeaderVue,
    MenuVue,
    //BannerVue,
    //FrameVue,
    FooterVue,
    //ProductVue,
    //FilterVue,
  },
};
</script>

<style lang="scss">
@import "src/scss/style";
</style>
