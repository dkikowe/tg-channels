import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Week from "./pages/Week/Week";
import Catalog from "./components/Catalog/Catalog";
import Main from "./pages/Main/Main";
import Filter from "./components/Filter/Filter";
import { useEffect } from "react";
import Channel from "./components/Channel/Channel";
import Premium from "./components/Premium/Premium";
import Recommend from "./components/Recommend/Recommend";

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      // tg.requestFullscreen();
      tg.disableVerticalSwipes();
      tg.ready();

      return () => {
        tg.close(); // Закрытие веб-приложения (при необходимости)
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Week />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/main" element={<Main />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}
export default App;
