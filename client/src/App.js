
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Pages/Home/Homescreen';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} > </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
