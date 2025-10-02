import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "./components/shared/Loading/Loading";
import { IntlProvider } from "react-intl";
import { translate } from "./translation/translate";
const Home = lazy(() => import("./pages/Home/home"));
const UserDetail = lazy(() => import("./pages/UserDetails/UserDetails"));

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <IntlProvider locale="en-GB" messages={translate["en-GB"]}>
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
