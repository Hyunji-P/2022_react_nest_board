import BoardList from "./components/board.list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/error/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<BoardList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
