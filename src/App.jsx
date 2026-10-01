import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Section, {
  ContactPage,
  EducationPage,
  GalleryPage,
} from "./Section";
import Footer from "./Footer";

function Profile() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<Section />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default Profile;