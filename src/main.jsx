import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // <-- add this line
import './index.css';
import { ThemeProvider } from "./components/Theme/theme-provider";
import App from './App.jsx';
import Navbar from "./components/layouts/NavigationBar";
import Footer from './components/layouts/Footer';
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Router>
      <Navbar />
      <StrictMode>
         <Toaster position="top-right" richColors />
        <App />
      </StrictMode>
      <Footer />
    </Router>
  </ThemeProvider>
);
