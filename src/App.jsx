import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Week from "./pages/Week/Week";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Week />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}
export default App;
