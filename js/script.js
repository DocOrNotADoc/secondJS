
// Возьмите свой код из предыдущей практики
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
// Все предыдущие комменты удалены. Код отрефакторен,- переменные наверху.
// делаем, чтобы наш скрипт сработал тогда, когда дом-дерево уже загоружено, но не весь контет. Картинки и стили ждать не надо. Оборачиваем всё.
document.addEventListener('DOMContentLoaded', () => { // есть вариант window.addEventListener.......

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ads = document.querySelectorAll('.promo__adv div, img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // чтобы страница не обновлялась при добавлении инпута

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        // addForm.reset();
        event.target.reset();
    });


    const deleteAds = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    

    // пока что, можно не переделывать с аргументами
    const makeChanges = () => { 
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("../img/bg.jpg")';
    };  


    const sortArr = (arr) => {
        arr.sort();
    };
    

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                // рекурсия - когда функция использует сама себя внутри.
                // в нашем случае, это нужно, чтобы при удалении элементов обновлялась нумерация
                // createMovieList(movieDB.movies, movieList);
                createMovieList(films, parent);
            });
        });
    }

    deleteAds(ads);
    makeChanges();
    // sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});

