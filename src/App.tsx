import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login"; // 👈 asegúrate de que la ruta es correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        {/* Aquí puedes añadir más rutas en el futuro */}
      </Routes>
    </Router>
  );
}

export default App;
