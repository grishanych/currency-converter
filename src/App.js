import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Converter = lazy(() => import("./Components/converter/converter"));
const Exchange = lazy(() => import("./Components/exchange/exchange"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route component={() => <div>Not found this Route</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
