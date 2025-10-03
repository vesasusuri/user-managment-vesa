import React, { lazy, Suspense, useEffect } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "./components/shared/Loading/Loading";
import { IntlProvider } from "react-intl";
import { translate } from "./translation/translate";
const Home = lazy(() => import("./pages/Home/home"));
const UserDetail = lazy(() => import("./pages/UserDetails/UserDetails"));

function App() {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    console.log("Loaded messages:", translate[language]);
  }, [language]);

  return (
    <IntlProvider locale={language} messages={translate[language]}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </IntlProvider>
  );
}

export default App;
