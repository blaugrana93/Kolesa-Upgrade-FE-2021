<template>
  <header class="header">
    <div class="header__left">
      <div class="header__left-logo">
        <img src="/src/image/logo-kolesa.svg" alt="logo-kolesa" />
      </div>
      <div class="search">
        <input type="text" class="search__input" placeholder="Поиск" />
        <button class="search__button">
          <img src="/src/image/icon-search.svg" alt="icon-search" />
        </button>
      </div>
    </div>
    <div class="header__right">
      <a href="#" class="accaunt">
        <span class="accaunt__img-wrapper">
          <img
            class="accaunt__img"
            src="/src/image/pictures-user.svg"
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
export default {
  name: "header",
};
</script>

<style>

</style>
