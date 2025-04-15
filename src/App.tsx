import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleDetailPage } from "./components/ArticleDeletePage";
import CardList from "./components/CardList";
import CustomNav from "./components/CustomNav";
import CustomFooter from "./components/CusyomFooter";

function App() {
  return (
    <>
      <Router>
        <CustomNav />
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
        </Routes>
        <CustomFooter />
      </Router>
    </>
  );
}

export default App;
