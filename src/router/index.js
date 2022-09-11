import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";

import Intro from "../pages/Intro";
import IntroFirst from "../pages/Intro/first";
import IntroFourth from "../pages/Intro/fourth";
import IntroSecond from "../pages/Intro/second";
import IntroThird from "../pages/Intro/third";

import Task from "../pages/Task";
import MainTask from "../pages/Task/main";

import CompletePage from "../pages/Complete";
import FinishPage from "../pages/Finish";

const Router = () => {
  return(
    <Suspense>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/intro/1" element={<IntroFirst />} />
        <Route exact path="/intro/2" element={<IntroSecond />} />
        <Route exact path="/intro/3" element={<IntroThird />} />
        <Route exact path="/intro/4" element={<IntroFourth />} />

        <Route exact path="/task" element={<Task />} />
        <Route exact path="/task/1" element={<MainTask />} />
        <Route exact path="/task/2" element={<MainTask />} />

        <Route exact path="/complete" element={<CompletePage />} />

        <Route exact path="/finish" element={<FinishPage />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  )
};

export default Router;