<template>
  <div class="product__catalog row" v-if="this.selectedTab === 0">
    <div
      class="col-4"
      v-for="(card, index) in searchAllCardsFilter"
      :key="index"
    >
      <div class="product" :data-id="card.id">
        <div class="product__img-wrapper">
          <span class="product__icon-new" v-if="card.isNew">NEW</span>
          <a href="#" onclick="openmodal(${z})" class="product__img-link">
            <img :src="card.mainImage" :alt="card.title" style="width: 330px" />
          </a>
        </div>
        <div class="product__desc">
          <p class="product__desc-scores">{{ card.price }}</p>
          <p class="product__desc-title">
            <a onclick="openmodal(${z})" class="product__desc-link" href="#">
              {{ card.title }}
            </a>
          </p>
          <p class="product__desc-size">{{ getFormattedText(card.sizes) }}</p>
          <button @click="openModal(card)" class="product__desc-button">
            Заказать
          </button>
        </div>
      </div>
    </div>
    <ModalVue
      :isOpen="isShowModal"
      @close="closeModal"
      :card="cardToModal"
      @orderFromModal="orderInCard"
    ></ModalVue>
  </div>
  <div class="product__catalog row" v-else-if="this.selectedTab === 1">
    <div
      class="col-4"
      v-for="(card, index) in searchAllCardsFilter"
      :key="index"
    >
      <div class="product" :data-id="card.id">
        <div class="product__img-wrapper">
          <span class="product__icon-new" v-if="card.isNew">NEW</span>
          <a href="#" onclick="openmodal(${z})" class="product__img-link">
            <img :src="card.mainImage" :alt="card.title" style="width: 330px" />
          </a>
        </div>
        <div class="product__desc">
          <p class="product__desc-scores">{{ card.price }}</p>
          <p class="product__desc-title">
            <a onclick="openmodal(${z})" class="product__desc-link" href="#">
              {{ card.title }}
            </a>
          </p>
          <p class="product__desc-size">{{ getFormattedText(card.sizes) }}</p>
          <button @click="openModal(card)" class="product__desc-button">
            Заказать
          </button>
        </div>
      </div>
    </div>
    <ModalVue
      :isOpen="isShowModal"
      @close="closeModal"
      :card="cardToModal"
      @orderFromModal="orderInCard"
    ></ModalVue>
  </div>
  <div class="product__catalog row" v-else-if="this.selectedTab === 2">
    <div
      class="col-4"
      v-for="(card, index) in searchAllCardsFilter"
      :key="index"
    >
      <div class="product" :data-id="card.id">
        <div class="product__img-wrapper">
          <span class="product__icon-new" v-if="card.isNew">NEW</span>
          <a href="#" onclick="openmodal(${z})" class="product__img-link">
            <img :src="card.mainImage" :alt="card.title" style="width: 330px" />
          </a>
        </div>
        <div class="product__desc">
          <p class="product__desc-scores">{{ card.price }}</p>
          <p class="product__desc-title">
            <a onclick="openmodal(${z})" class="product__desc-link" href="#">
              {{ card.title }}
            </a>
          </p>
          <p class="product__desc-size">{{ getFormattedText(card.sizes) }}</p>
          <button @click="openModal(card)" class="product__desc-button">
            Заказать
          </button>
        </div>
      </div>
    </div>
    <ModalVue
      :isOpen="isShowModal"
      @close="closeModal"
      :card="cardToModal"
      @orderFromModal="orderInCard"
    ></ModalVue>
  </div>

  <div v-else>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
</template>

<script>
import ModalVue from "@/components/Modal.vue";
export default {
  name: "Product",
  props: {
    clothes: Array,
    accesses: Array,
    selectedTab: Number,
    search: String,
  },
  data() {
    return {
      isShowModal: false,
      cardToModal: {},
      testCard: {},
      sizesOfCards: [],
      // init: [],
    };
  },
  computed: {
    sortedAllCards() {
      const arr = this.clothes.concat(this.accesses);
      arr.sort((a, b) => b.isNew - a.isNew);
      return arr;
    },
    searchAllCardsFilter() {
      return this.sortedAllCards.filter((card) =>
        card.title.toLowerCase().match(this.search)
      );
    },
    searchClothesFilter() {
      return this.clothes.filter((card) =>
        card.title.toLowerCase().match(this.search)
      );
    },
    searchAccessesFilter() {
      return this.accesses.filter((card) =>
        card.title.toLowerCase().match(this.search)
      );
    },
  },
  methods: {
    openModal(card) {
      this.cardToModal = card;
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    orderInCard(cost) {
      this.$emit("orderFromCard", cost);
    },
    getFormattedText(sizes) {
      return sizes && sizes.length ? `Размеры ${String(sizes)}` : "";
    },
  },
  components: {
    ModalVue,
  },
};
</script>

<style>
</style>