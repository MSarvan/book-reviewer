import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookInfo from "./components/BookInfo";
import Navbar from "./components/Navbar";

function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BookList />}  />
      <Route path="/:id" element={<BookInfo />}  />
    </Routes>
  </div>;
}

export default App;
