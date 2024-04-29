import React from "react";
import '../styles/components-styles/main-page.css';
import '../styles/components-styles/film-feed-card.css';
import { TopFilmsContextProvider } from '../contexts/TopFilmsContext';
import FilmsContainer from "../components/FilmsContainer";
import PaginationPanel from "../components/PaginationPanel";
import { useState } from "react";


export default function TopMoviesPage() {
  return (
    <TopFilmsContextProvider>
      <main className="main-section">
        <header className="best-movies-header">
          <h1 className="best-movies-title">Кино справочник <br/>«Лучших фильмов»</h1>
          <p className="best-movies-description">
            Здесь вы найдёте фильмы категории «Top Rated» согласно TMDB. 
            Можете воспользоваться пагинацией для быстрого поиска.</p>
          <p className="best-movies-description">Приложение написано на JS + ReactJS. Используются useState, useEffect, createContext, useContext, useMemo, useCallback. Для ускорения написания страницы используется Pagination и LinearProgress MaterialUI во время ожидания загрузки постера фильма. Запросы осуществляются через fetchAPI. Используется машрутизация по карточкам фильмов. Подгружаются данные о фильмах. Совершается отображение «Похожих» фильмов</p>
        </header>
        <section className="top-rated">
          <h2>Лучшие фильмы</h2>
          <PaginationPanel/>
          <FilmsContainer className="films-container"/>
        </section>
      </main>
    </TopFilmsContextProvider>
  )
}