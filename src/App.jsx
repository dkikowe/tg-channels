import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Week from "./pages/Week/Week";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Week />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}
export default App;
