import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import Favorites from './pages/Favorites';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar logoText="Student Dashboard" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;