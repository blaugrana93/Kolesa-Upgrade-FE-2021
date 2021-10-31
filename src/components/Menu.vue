<template>
  <div class="menu">
    <ul class="menu__list">
      <li v-for="item in menuItems" :key="item.id">
        <a
          class="menu__group"
          href="#"
          :class="{ 'menu__group--active': item.isActive }"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: "Оргсхема",
          isActive: false,
        },
        {
          id: 2,
          title: "Kolesa Team",
          isActive: false,
        },
        {
          id: 3,
          title: "Kolesa Shop",
          isActive: true,
        },
        {
          id: 4,
          title: "Картина компании",
          isActive: false,
        },
        {
          id: 5,
          title: "Новости",
          isActive: false,
        },
        {
          id: 6,
          title: "Education",
          isActive: false,
        },
        {
          id: 7,
          title: "Guidelines",
          isActive: false,
        },
        {
          id: 8,
          title: "Библиотека",
          isActive: false,
        },
        {
          id: 9,
          title: "FAQ",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>
