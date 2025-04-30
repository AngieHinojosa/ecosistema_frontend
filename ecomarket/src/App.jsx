import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './components/context/ThemeContext'; 
import { DrawerProvider } from './components/NavBar/useDrawerContext';
import NavBar from './components/NavBar/NavBar';
import TeamSection from './components/Nosotros/TeamSection'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <Router>
          <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavBar />
            <main style={{ flex: 1, padding: '2rem' }}>
              <Routes>
                <Route path="/nosotros" element={<TeamSection />} />
                <Route path="/" element={<div style={{ height: "400px", backgroundColor: "#eee" }}>Página de inicio</div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DrawerProvider>
    </ThemeProvider>
  );
}

export default App;