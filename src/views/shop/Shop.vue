<template>
  <div class="content">
    <BannerVue />
    <FrameVue />

    <FilterVue
      @showAllBtn="showAllBtn"
      @showClothesBtn="showClothesBtn"
      @showAccessesBtn="showAccessesBtn"
    ></FilterVue>

    <ProductVue
      :clothes="clothesFromBE"
      :accesses="accessesFromBE"
      :selectedTab="selectedTab"
      @orderFromCard="orderToUser"
      :search="search"
    ></ProductVue>
  </div>
</template>

<script>
 import axios from '@/axios';
 import BannerVue from  '@/layouts/components/Banner.vue';
 import FrameVue from '@/views/shop/components/Frame.vue';
 import ProductVue from  '@/views/shop/components/Product.vue';
 import FilterVue from '@/views/shop/components/Filter.vue';
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
      isShowModal: false,
      selectedTab: 0,
      orderPrice: 0,
      
      clothesFromBE: [],
      accessesFromBE: [],
      
    };
  },
  computed: {
    allProducts() {
      return { ...this.clothesFromBE, ...this.accessesFromBE };
    },
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
    BannerVue,
    FrameVue,
    ProductVue,
    FilterVue,
  },
};
</script>
