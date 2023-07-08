import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Account, Learning, Leaderboard, Menu, Information } from "./pages";
import { Navbar } from "./components";
import { Ramen } from "./components/canvas";
import { LoginPage } from "./pages";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.token);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="landing fixed w-screen items-center justify-center min-h-screen sm:pb-0 mb-20">
          <Ramen />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/account" element={<Account />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/information" element={<Information />} />
            <Route path="/login" element={token ? <Account /> : <LoginPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
