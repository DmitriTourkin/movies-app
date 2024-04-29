import React from "react";
import {Link } from 'react-router-dom';
import '../styles/lending-page.css'

export default function LendingPage() {
  return (
    <div className="page-content-lending">
        <h1 className="lending-title">Поиск фильмов и сериалов на ваш вкус</h1>
        <Link to={`/movies`}>
          <button className="lending-button">Начать поиск</button>
        </Link>
    </div>
  )
}