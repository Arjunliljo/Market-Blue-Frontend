import { Outlet } from "react-router-dom";
import Header from "./App/Header/Header";
import Footer from "./App/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
