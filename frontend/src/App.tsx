// Packages
import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import AuthPage from "./pages/auth/AuthPage";
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const Custom404 = lazy(() => import("./pages/Custom404"));

// Components
import Background from "./components/Background";
import ErrorPopup from "./components/ErrorPopup";
import Loader from "./components/Loader/Loader";

// Contexts
import { UserProvider } from "./contexts/UserContext";
import { ShowLoaderContext } from "./contexts/ShowLoaderContext";
import { ShowErrorContext } from "./contexts/ShowErrorContext";

// Styling
import "./index.css";

export default function App() {
  const [showLoader, setShowLoader] = useState(false);
  const [error, showError] = useState({
    show: false,
    message: "Some error occured!\nSorry for the inconvenience.",
  });
  return (
    <BrowserRouter>
      <Background />
      {showLoader && <Loader />}
      <ShowLoaderContext.Provider value={{ showLoader, setShowLoader }}>
        <UserProvider>
          <ShowErrorContext.Provider
            value={{ error: error, setShowError: showError }}
          >
            <Suspense fallback={<Loader />}>
              {error.show && <ErrorPopup message={error.message} />}
              <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Custom404 />} />
              </Routes>
            </Suspense>
          </ShowErrorContext.Provider>
        </UserProvider>
      </ShowLoaderContext.Provider>
    </BrowserRouter>
  );
}
