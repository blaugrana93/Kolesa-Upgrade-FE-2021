<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="wrapper">
        <div class="content-wrapper">
            <div class="container">
                <Header />
                <div class="main">

                    <div class="menu">
                        <ul class="menu__list">
                            <li>
                                <a class="menu__group" href="#">Оргсхема</a>
                            </li>
                            <li>
                                <a class="menu__group" href="#">Kolesa Team</a>
                            </li>
                            <li>
                                <a class="menu__group  menu__group-active" href="#">Kolesa Shop</a>
                            </li>
                            <li>
                                <a class="menu__group" href="#">Картина компании</a>
                            </li>
                            <li>
                                <a class="menu__group" href="#">Новости</a>
                            </li>
                            <li>
                                <a class="menu__group" href="#">Education</a>
                            </li>
                            <li>
                                <a class="menu__group" href="#">Guidelines</a>
                            </li>
                            <li>
                                <a class="menu__group" href="#">Библиотека</a>
                            </li>
                            <li>
                                <a class="menu__group" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    <div class="content">

                        <div>
                            <img src="/src/image/baner-summer-sale.jpg" alt="baner-summer-sale">
                        </div>

                        <div class="frame row">
                            <div class="col-4">
                                <a href="#" class="frame__left">
                                    <img src="/src/image/icon-plus.svg" alt="icon-plus">
                                    <span class="frame__left-text">Получить баллы</span>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#" class="frame__center">
                                    <img src="/src/image/icon-question.svg" alt="icon-question">
                                    <span class="frame__center-text">Как получить баллы</span>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#" class="frame__right ">
                                    <img src="/src/image/icon-gif.svg" alt="icon-gif">
                                    <span class="frame__right-text">Подарить баллы</span>
                                </a>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="filter">
                                    <button class="filter__button filter__button-active" type="button" data-filter="all">Все
                                        товары</button>
                                    <button class="filter__button" type="button" data-filter="clothes">Одежда</button>
                                    <button class="filter__button" type="button" data-filter="accessories">Акксесуары</button>
                                </div>
                            </div>
                        </div>

                        <div class="product__catalog row" id="app">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="footer__about-block">

                    <div class="footer__social-network">
                        <p class="footer__social-copyright">© Kolesa Group</p>
                        <div>
                            <a href="#"><img class="footer__social-insta" src="/src/image/icon-insta.svg" alt="icon-insta"></a>
                            <a href="#"><img class="footer__social-youtube" src="/src/image/icon-youtube.svg" alt="icon-youtube"></a>
                            <a href="#"><img class="footer__social-vk" src="/src/image/icon-vk.svg" alt="icon-vk"></a>
                        </div>
                    </div>

                    <div class="footer__towrite">
                        <p class="footer__towrite-text">
                            Есть идеи что улучшить?<br>
                            Не знаешь, с кем решить проблему?
                        </p>
                        <button type="button" class="footer__towrite-button">Написать</button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
