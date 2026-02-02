import React from "react";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./component/Hero";
import Category from "./component/Category";
import Category2 from "./component/Category2";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Category />
                <Category2 />
              </>
            }
          />
          <Route path="/shop" element={<>
            <Category />
                <Category2 />
          </>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
