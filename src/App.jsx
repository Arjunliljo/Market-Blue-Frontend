import { Outlet } from "react-router-dom";
import Header from "./App/Header/Header";
import Footer from "./App/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
