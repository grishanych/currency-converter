import "./App.css";
import Converter from "./Components/converter/converter";
import Exchange from "./Components/exchange/exchange";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
  </Router>
  );
}

export default App;
