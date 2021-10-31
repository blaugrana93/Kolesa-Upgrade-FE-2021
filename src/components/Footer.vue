<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__about-block">
        <div class="footer__social-network">
          <p class="footer__social-copyright">© Kolesa Group</p>
          <div>
            <a href="#" v-for="social in socials" :key="social.id">
              <img
                class="footer__social-insta"
                :src="social.src"
                :alt="social.title"
              />
            </a>
          </div>
        </div>
        <div class="footer__towrite">
          <p class="footer__towrite-text">
            Есть идеи что улучшить?<br />
            Не знаешь, с кем решить проблему?
          </p>
          <button type="button" class="footer__towrite-button">Написать</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socials: [
        {
          id: 1,
          src: "image/icon-insta.svg",
          title: "Instagram",
        },
        {
          id: 2,
          src: "image/icon-youtube.svg",
          title: "Youtube",
        },
        {
          id: 3,
          src: "image/icon-vk.svg",
          title: "Vkontakte",
        },
      ],
    };
  },
};
</script>

<style>
</style>
