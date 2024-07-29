import { Outlet } from "react-router-dom";
import Header from "./App/Header/Header";
import Footer from "./App/Footer/Footer";
import VideoPlayer from "./App/Utility/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="app">
      <Header />
      <VideoPlayer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
