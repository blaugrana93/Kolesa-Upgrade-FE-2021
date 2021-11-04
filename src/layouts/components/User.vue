<template>
  <a href="#" class="accaunt user">
    <span class="accaunt__img-wrapper">
      <img
        class="accaunt__img"
        src="image/pictures-user.svg"
        alt="pictures-user"
      />
    </span>
    <span class="accaunt__desc-wrapper">
      <span class="accaunt__desc-name">{{ name }}</span>
      <span class="accaunt__desc-specs">{{ price }} баллов</span>
    </span>
  </a>
</template>
<script>
import Axios from "@/axios";
export default {
  name: "User",
  data() {
    return {
      name: "",
      score: 0,
    };
  },
  props: {
    orderPrice: Number,
  },
  mounted() {
    Axios.get("templates/7ZW3y5GAuIge/data").then((response) => {
      this.name = response.data.name;
      this.score = response.data.score;
      this.$emit("getScoreFromUser", this.score);
    });
  },
  computed: {
    price() {
      if (this.orderPrice < 0) {
        alert("У вас мало баллов!");
        return 0;
      }
      return this.orderPrice;
    },
  },
  methods: {},
};
</script>