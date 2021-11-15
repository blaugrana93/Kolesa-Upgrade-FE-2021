<template>
  <div class="row">
    <div class="col-12">
      <div class="filter">
        <input
          type="radio"
          name="type"
          id="all-goods"
          value="0"
          v-model="selectedType"
          @click="showAll"
          checked
        />
        <label data-key="all-goods" class="filter__button" for="all-goods"
          >Все товары</label
        >

        <input
          type="radio"
          name="type"
          id="clothes"
          value="1"
          v-model="selectedType"
          @click="showClothes"
        />
        <label data-key="clothes" class="filter__button" for="clothes"
          >Одежда</label
        >

        <input
          type="radio"
          name="type"
          id="accesses"
          value="2"
          v-model="selectedType"
          @click="showAccesses"
        />
        <label data-key="accesses" class="filter__button" for="accesses"
          >Аксессуары</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      selectedType: 0,
      types: [
        {
          name: "All goods",
          value: "all",
        },
        {
          name: "Clothes",
          value: "clothes",
        },
        {
          name: "Accessories",
          value: "accesses",
        },
      ],
    };
  },
  methods: {
    showAll() {
      this.$emit("showAllBtn");
    },
    showClothes() {
      this.$emit("showClothesBtn");
    },
    showAccesses() {
      this.$emit("showAccessesBtn");
    },
  },
};
</script>

<style>
</style>