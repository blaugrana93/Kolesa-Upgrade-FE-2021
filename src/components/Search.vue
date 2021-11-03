<template>
  <div class="search">
    <input
      type="search"
      class="search__input"
      placeholder="Поиск"
      name="s"
      v-model="query"
      @input="searchInput"
    />
    <button class="search__button">
      <img src="image/icon-search.svg" alt="icon-search" />
    </button>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchInput() {
      this.$emit("search", this.query);
    },
  },
};
</script>