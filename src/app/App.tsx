import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import { Link } from "react-router-dom";

import { Suspense, useContext, useState } from "react";

import { useTheme } from "./provider/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "app/provider/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
