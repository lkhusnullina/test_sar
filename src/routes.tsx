import { CardPage } from 'pages/CardPage/CardPage';
import { MainPage } from 'pages/MainPage/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { FunctionComponent } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";

export const AppRoutes:FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};