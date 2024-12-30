import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Posts from "./components/Posts";
import FindAge from './components/Find';
import Tabs from './components/Tabs';
import Modal from './components/ModalPage'

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <div className="text-white flex justify-around">
          <Link to="/counter">Counter</Link>
          <Link to="/find-age">Javascript Function Find Age</Link>
          <Link to="/tabs">Tabs</Link>
          <Link to="/modal">Modal</Link>
          <Link to="/table-data">Table Data</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/find-age" element={<FindAge />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/table-data" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
