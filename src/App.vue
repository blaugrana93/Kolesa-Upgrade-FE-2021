<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <div class="container">
        <HeaderVue />
        <div class="main">
          <MenuVue />
          <div class="content">
            <BannerVue />
            <FrameVue />
            <div class="row">
              <div class="col-12">
                <div class="filter">
                  <button
                    class="filter__button filter__button-active"
                    type="button"
                    data-filter="all"
                  >
                    Все товары
                  </button>
                  <button
                    class="filter__button"
                    type="button"
                    data-filter="clothes"
                  >
                    Одежда
                  </button>
                  <button
                    class="filter__button"
                    type="button"
                    data-filter="accessories"
                  >
                    Акксесуары
                  </button>
                </div>
              </div>
            </div>

            <div class="product__catalog row" id="app"></div>
          </div>
        </div>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import MenuVue   from "@/components/Menu.vue";
import BannerVue from "@/components/Banner.vue";
import FrameVue from  "@/components/Frame.vue";
import FooterVue from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    MenuVue,
    BannerVue,
    FrameVue,
    FooterVue,
  },
};
</script>

<style lang="scss">
@import "src/scss/style";
</style>
