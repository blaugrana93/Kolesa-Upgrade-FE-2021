<template>
  <div class="wrapper">
        <div class="content-wrapper">
            <div class="container">
                <header class="header">
                    <div class="header__left">
                        <div class="header__left-logo">
                            <img src="/src/image/logo-kolesa.svg" alt="logo-kolesa">
                        </div>
                        <div class="search">
                            <input type="text" class="search__input" placeholder="Поиск">
                            <button class="search__button">
                                <img src="/src/image/icon-search.svg" alt="icon-search">
                            </button>
                        </div>
                    </div>
                    <div class="header__right">
                        <a href="#" class="accaunt">
                            <span class="accaunt__img-wrapper">
                                <img class="accaunt__img" src="/src/image/pictures-user.svg" alt="pictures-user">
                            </span>
                            <span class="accaunt__desc-wrapper">
                                <span class="accaunt__desc-name">Мортиджан</span>
                                <span class="accaunt__desc-specs">300 баллов</span>
                            </span>
                        </a>
                    </div>
                </header>

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
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>
<style lang="scss">
  @import "./scss/style.scss";
</style>
