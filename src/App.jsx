import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Hero from "./components/Hero/Hero";
import WhatsAppButton from "./components/layout/WhatsAppButton";
// We create a wrapper component to access the location hook
function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />    
      <WhatsAppButton />
      {/* <Hero /> */}
      {/* The 'key' attribute here is the magic fix. 
        Whenever the path changes, React sees a new key, 
        destroys the old DOM completely, and builds the new one. 
        This eliminates "Node not found" errors.
      */}
      <div key={location.pathname} className="overflow-hidden">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;