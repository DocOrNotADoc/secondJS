// В КАЖДОМ СЛЕДУЮЩЕМ УРОКЕ БУДУ УДАЛЯТЬ КОММЕНТЫ И ЗАПАСНЫЕ ВАРИАНТЫ, А ТАКЖЕ НЕМНОГО ПЕРЕНОСИТЬ, НАПРИМЕР, ПЕРЕМЕННЫЕ ВВЕРХ
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const ads = document.querySelector('.promo__adv');
ads.remove();

// ВАРИАНТ ИВАНА - ПОЛУЧАЕМ ВСЕ ПРОМО_АДВ. РАЗНИЦА БУДЕТ, КОГДА РЕКЛАМНЫХ БЛОКОВ НЕСКОЛЬКО. ПОКА ОСТАВЛЮ СВОЙ ВАРИАНТ
// const advs = document.querySelectorAll('.promo__adv');
// advs.forEach(item => {
//     item.remove();
// });

// или обычная функция
// const advs = document.querySelectorAll('.promo__adv');
// advs.forEach(function (item){
//     item.remove();
// });

//2 // я поменял не текст, но весь элемент. Оставлю вариант Ивана, в котором меняется именно текст.
// const failGenre = document.querySelector('.promo__genre');
// const currentGenre = document.createElement('div');
// currentGenre.innerHTML = "<div class='promo__genre'>ДРАМА</div>";
// failGenre.replaceWith(currentGenre);

// вар. Ивана - 2 и 3 сразу
    const poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre');

    genre.textContent = 'драма'; // однако, так тоже можно! норм!



//3
poster.style.backgroundImage = 'url("../img/bg.jpg")';


//4,5 // Всё-таки, Иван решил не менять отолько текст, но изменить элемент. Ок, сделаю так же
const movieList = document.querySelector('.promo__interactive-list');

movieList.innerHTML = ''; // чистим список из HTML-ки

movieDB.movies.sort(); // сортируем список

//console.log(poster.innerHTML); // через innerHTML можно получить все элементы с вёрсткой в виде одной большой строки


movieDB.movies.forEach((film, i) => {
    // a = a + 1; a = a + "aaa";
    // a += 1; a += "aaa"//same
    // если не поставить плюс, то каждый цикл будет замещять вывод предыдущего
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
