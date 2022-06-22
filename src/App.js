import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RepoDetail } from "./RepoDetail";
import { RepoList } from "./RepoList";
import { RepoProvider } from "./Hooks";

export default function App() {
  return (
    <RepoProvider>
      <BrowserRouter>
        <Routes >
          <Route path="/" exact element={<RepoList />} />
          <Route path="/:id" exact element={<RepoDetail />} />
        </Routes>
      </BrowserRouter>
    </RepoProvider>
  );
}
