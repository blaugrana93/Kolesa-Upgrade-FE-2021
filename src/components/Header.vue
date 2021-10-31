<template>
  <header class="header">
    <div class="header__left">
      <div class="header__left-logo">
        <img src="image/logo-kolesa.svg" alt="logo-kolesa" />
      </div>
      <SearchVue />
    </div>
    <div class="header__right">
      <UserVue />
    </div>
  </header>
</template>

<script>
import SearchVue from '@/components/Search.vue';
import UserVue from '@/components/User.vue';
export default {
  name: "Header",
  components: {
    SearchVue,
    UserVue,
  },
};
</script>

<style>

</style>
