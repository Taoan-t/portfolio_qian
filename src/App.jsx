import MainPage from "./pages/MainPage";
import styles from "./App.module.css";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.mainLayout}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="projects" element={<Project />} />
            <Route path="contact" element={<Footer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          {/* <Skill /> */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
