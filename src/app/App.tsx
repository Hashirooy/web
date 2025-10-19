import React, { Suspense, useEffect, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "./entities/User";

function App() {
  const { theme } = useTheme();
  const [isOpen, setisOpen] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(userActions.initAuthData())
  }, [])
  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setisOpen(true)}>Open Modal</button>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
