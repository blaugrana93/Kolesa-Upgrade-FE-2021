// import '../css/style.css';

const catalogClothes = [
    {
        id:     1,
        images: ['t-shirt.jpg', 't-shirt11.jpg', 't-shirt10.jpg'],
        score:  '220 баллов',
        title:  'Футболка Все победы начинаются с победы над самим собой',
        desc:   'ДЕТСКАЯ ФУТБОЛКА AKSILA REIMA',
        size:   ['S', 'M', 'L'],
        new:    true,
        colors: ['Синий','Серый'],
        category: 'clothes'
    },
    {
        id:     2,
        images: ['t-shirt1.jpg', 't-shirt.jpg', 't-shirt12.jpg'],
        score:  '220 баллов',
        title:  'Футболка Смелость — начало победы.',
        desc:   'Футболка детская, в ассортименте. Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    true,
        colors: ['Синий','Бежевый','Серый'],
        category: 'clothes'
    },
    {
        id:     3,
        images: ['t-shirt2.jpg', 't-shirt1.jpg', 't-shirt.jpg'],
        score:  '220 баллов',
        title:  'Футболка Спорт — это сила, спорт — это жизнь!',
        desc:   'Футболка для гребли и занятий спортом RED ORIGINAL PERFORMANCE DRI-RELEASE',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Бежевый','Серый'],
        category: 'clothes'
    },
    {
        id:     4,
        images: ['t-shirt3.jpg', 't-shirt2.jpg', 't-shirt2.jpg'],
        score:  '220 баллов',
        title:  'Футболка Одна нация — одна культура',
        desc:   'Футболка детская х/б цвет БЕЛЫЙ  Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Бежевый','Серый'],
        category: 'clothes'
    },
    {
        id:     5,
        images: ['t-shirt4.jpg', 't-shirt3.jpg', 't-shirt2.jpg'],
        score:  '220 баллов',
        title:  'Футболка Живи секундой',
        desc:   'Футболка с Пантерой. Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Бежевый','Серый'],
        category: 'clothes'
    },
    {
        id:     6,
        images: ['t-shirt5.jpg', 't-shirt4.jpg', 't-shirt3.jpg'],
        score:  '220 баллов',
        title:  'Футболка Все что не делается в жизни, все к лучшему',
        desc:   'Черная футболка Supreme. Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Бежевый','Серый'],
        category: 'clothes'
    },
];
const catalogAccessories = [
    {
        id:     7,
        images: ['t-shirt6.jpg', 't-shirt5.jpg', 't-shirt4.jpg'],
        score:  '220 баллов',
        title:  'Футболка Без борьбы нет прогресса',
        desc:   'Футболка мужская Sol"s Imperial 190 NYC 11500268/96XXL Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    true,
        colors: ['Синий','Бежевый','Серый'],
        category: 'accessories'
    },
    {
        id:     8,
        images: ['t-shirt7.jpg', 't-shirt6.jpg', 't-shirt5.jpg'],
        score:  '220 баллов',
        title:  'Футболка Никогда не говори никогда.',
        desc:   'Футболка Joma Combi 100052.200. Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    true,
        colors: ['Синий','Бежевый','Серый'],
        category: 'accessories'
    },
    {
        id:   9,
        images: ['t-shirt8.jpg', 't-shirt7.jpg', 't-shirt6.jpg'],
        score:  '220 баллов',
        title:  'Футболка Никогда не отказывайтесь от своей мечты.',
        desc:   'Футболка United World Wrestling UWW Белая Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Серый'],
        category: 'accessories'
    },
    {
        id:   10,
        images: ['t-shirt9.jpg', 't-shirt8.jpg', 't-shirt7.jpg'],
        score:  '220 баллов',
        title:  'Футболка Если не ты, то кто?',
        desc:   'Футболка Joma Combi 100052.450. Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Бежевый','Серый'],
        category: 'accessories'
    },
    {
        id:   11,
        images: ['t-shirt10.jpg', 't-shirt9.jpg', 't-shirt8.jpg'],
        score:  '220 баллов',
        title:  'Футболка Хочешь жить - умей крутиться',
        desc:   'Футболка Включите Меладзе, откройте вино. Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Бежевый','Серый'],
        category: 'accessories'
    },
    {
        id:   12,
        images: ['t-shirt11.jpg', 't-shirt10.jpg', 't-shirt9.jpg'],
        score:  '220 баллов',
        title:  'Футболка Эволюционируй или много текста много текста',
        desc:   'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%,Вискоза 20%',
        size:   ['S', 'M', 'L'],
        new:    false,
        colors: ['Синий','Бежевый'],
        category: 'accessories'
    }
];


// eslint-disable-next-line no-unused-vars
let all = catalogAccessories.concat(catalogClothes)


function openmodal(x) {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    const modalInside = document.getElementsByClassName('modal__inside')[0];

    span.onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    let imagesHtml ='';
    let imagesArray = all[x]['images'];
    for (let i = 0; i < imagesArray.length; i++) {
        if(i === 0){
            imagesHtml += `<img class="active" src="/src/image/${imagesArray[i]}" alt="beige-sweatshirt"></img>`;
        }else{
            imagesHtml += `<img src="/src/image/${imagesArray[i]}" alt="beige-sweatshirt"></img>`;
        }
        
    }
    
    let colorsHtml ='';
    let colorsArray = all[x]['colors'];
    for (let i = 0; i < imagesArray.length; i++) {
        if(i === 0){
            colorsHtml += `
                <label for="colors-blue" class="colors__radio">
                    <input type="radio" name="colors" value="blue" id="colors-blue" checked>
                    <span class="colors__blue">${colorsArray[i]}</span>
                </label>
            `;
        }else{
            colorsHtml += `
                <label for="colors-blue" class="colors__radio">
                    <input type="radio" name="colors" value="blue" id="colors-blue">
                    <span class="colors__blue">${colorsArray[i]}</span>
                </label>
            `;
        }
        
    }

    
    let sizesHtml ='';
    let sizesArray = all[x]['size'];
    for (let i = 0; i < sizesArray.length; i++) {
        if(i === 0){
            sizesHtml += `
                <label for="size-s" class="size__radio">
                    <input type="radio" name="size" value="${sizesArray[i]}" id="size-${sizesArray[i]}" checked>
                    <span class="size-s">${sizesArray[i]}</span>
                </label>
            `;
        }else{
            sizesHtml += `
            <label for="size-s" class="size__radio">
                <input type="radio" name="size" value="${sizesArray[i]}" id="size-${sizesArray[i]}">
                <span class="size-s">${sizesArray[i]}</span>
            </label>
            `;
        }
        
    }

    modalInside.innerHTML = `
    <div class="modal__img">
            <div class="modal__img-top">
                <img src="/src/image/${all[x]['images'][1]}" alt="sweatshirt">
            </div>
            <div class="modal__img-bot">
            ${imagesHtml}
            </div>
        </div>
        <div class="modal__desc">
            <h2 class="modal__desc-title">${all[x]['title']}</h2>
            <p class="modal__desc-specs">${all[x]['score']}</p>
            <form action="#" class="form">
                <button class="form__button">Заказать</button>
                <p class="form__subtitle">Цвета:</p>

                <div>
                ${colorsHtml}
                </div>

                <p class="form__subtitle">Размер:</p>

                <div>
                ${sizesHtml}
                </div>
                <p class="form__subtitle"><strong>Детали:</strong></p>
                <p class="details_info">${all[x]['desc']}</p>
                <p class="form__subtitle"><strong>Как выбрать размер:</strong></p>
                <p>Написать дяде Рику для уточнения.</p>

            </form>
            <div class="balans">
                <div class="balans__desc">
                    <p class="balans__title">Твой баланс:</p>
                    <span class="balans__spec">3 945 баллов</span>
                </div>
                <div class="balans__img">
                    <img src="/image/bags.png" alt="bags">
                </div>
            </div>
        </div>
`;
    modal.style.display = 'block';
}


// eslint-disable-next-line no-plusplus
for (let z = 0; z < all.length; z++) {
    const elem = all[z];
    const newIcon = (elem['new']) ? '<span class="product__icon-new">NEW</span>' : '';

    document.querySelector('#app').innerHTML += `
      <div class="col-4" data-filter="${elem['category']}">
          <div class="product">
              <div class="product__img-wrapper">
                  ${newIcon}
                  <a href="#" onclick="openmodal(${z})" class="product__img-link">
                      <img src="/src/image/${elem['images'][1]}" alt="${elem['title']}"  style="width: 330px;">
                  </a>
              </div>
              <div class="product__desc">
                  <p class="product__desc-scores">${elem['score']}</p>
                  <p class="product__desc-title">
                      <a onclick="openmodal(${z})" class="product__desc-link" href="#">
                          ${elem['title']}
                      </a>
                  </p>
                  <p class="product__desc-size">Размер ${elem['size'].join('/')}</p>
                  <button onclick="openmodal(${z})" class="product__desc-button">Заказать</button>
              </div>
          </div>
      </div>
    `;
}

const filters = document.querySelectorAll('.filter__button');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        const selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.product__catalog .col-4:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.product__catalog [data-filter='${selectedFilter}']`);

        if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll('.product__catalog [data-filter]');
        }

        itemsToHide.forEach((el) => {
            el.classList.add('hide');
            el.classList.remove('show');
        });

        itemsToShow.forEach((el) => {
            el.classList.remove('hide');
            el.classList.add('show');
        });
    });
});
