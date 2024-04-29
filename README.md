# Мини React-приложение по поиску фильмов. 
Работа с API https://developer.themoviedb.org/ 

##  TMDB API работает с большими перебоями на территории России, поэтому обязательно включите VPN ❗️

Без VPN api не позволяет:
- загружать изображения (работает только с использование VPN). Приложение обрабатывает этот момент, поэтому Вы сможете наблюдать заглушку для изображений-постеров фильмов. В худшем случае вы увидите сообщение главного компонента о том, что сайт не предоставляет доступ. 
- сайт прекращает принимать запросы на некоторое время из-за чего работать с приложением невозможно — невозможно запросить данные ни через fetch, ни вручную через браузерную строку — сайт API перестаёт работать. 

## Запуск приложения
Чтобы запустить проект после клонирования необходимо: откройте терминал, ввведите 2 команды:
- `npm install` чтобы переустановить зависимости проекта
- `npm start` для запуска приложения (порт 3000)

## Проект содержит следующие компоненты:
- FilmsContainer — контейнер, который отображает карточки FilmFeedCard. 
- FilmFeedCard — карточки в ленте (содержат постер, рейтинг и название фильма)
- FilmDetailedCard — детализированные карточки с подробной информацией — описание, популярность, дата релиза, рейтинг. Внутри карточки находится независимый компонент AlikeFilmsDataStrip.
- AlikeFilmsDataStrip — компонент, запрашивающий данные о «Похожих фильмах», учитывающий id фильма, про который Вы захотели информацию поподробнее. 
- Общий контекст TopFilmsContext, которых хранит информацию о «Top-Rated» фильмах. 
- Компонент Pagination, которые считывает актуальное количество страниц с фильмами из Context.



  
