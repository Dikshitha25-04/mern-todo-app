import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EditTodo from "./pages/EditTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
