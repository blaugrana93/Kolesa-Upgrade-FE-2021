<template>
  <header class="header">
    <div class="header__left">
      <div class="header__left-logo">
        <img src="image/logo-kolesa.svg" alt="logo-kolesa" />
      </div>
      <SearchVue />
    </div>
    <div class="header__right">
      <a href="#" class="accaunt">
        <span class="accaunt__img-wrapper">
          <img
            class="accaunt__img"
            src="image/pictures-user.svg"
            alt="pictures-user"
          />
        </span>
        <span class="accaunt__desc-wrapper">
          <span class="accaunt__desc-name">Мортиджан</span>
          <span class="accaunt__desc-specs">300 баллов</span>
        </span>
      </a>
    </div>
  </header>
</template>

<script>
import SearchVue from '@/components/Search.vue';
export default {
  name: "Header",
  components: {
    SearchVue,
  },
};
</script>

<style>

</style>
