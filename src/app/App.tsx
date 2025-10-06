import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import { Link } from "react-router-dom";

import { Suspense, useContext, useState } from "react";

import { useTheme } from "./provider/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "app/provider/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { useTranslation } from "react-i18next";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
