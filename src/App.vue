<template>
  <div id="app">
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="container">
          <HeaderVue />
          <div class="main">
            <MenuVue />
            <div class="content">
              <BannerVue />
              <div class="frame row">
                <div class="col-4">
                  <a href="#" class="frame__left">
                    <img src="image/icon-plus.svg" alt="icon-plus" />
                    <span class="frame__left-text">Получить баллы</span>
                  </a>
                </div>
                <div class="col-4">
                  <a href="#" class="frame__center">
                    <img
                      src="image/icon-question.svg"
                      alt="icon-question"
                    />
                    <span class="frame__center-text">Как получить баллы</span>
                  </a>
                </div>
                <div class="col-4">
                  <a href="#" class="frame__right">
                    <img src="image/icon-gif.svg" alt="icon-gif" />
                    <span class="frame__right-text">Подарить баллы</span>
                  </a>
                </div>
              </div>
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
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import MenuVue from "./components/Menu.vue";
import BannerVue from "./components/Banner.vue";
import FooterVue from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    MenuVue,
    BannerVue,
    FooterVue
  },
};
</script>

<style lang="scss">
@import 'src/scss/style';
</style>
