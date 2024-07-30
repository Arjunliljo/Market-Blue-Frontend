import { Outlet } from "react-router-dom";
import Header from "./App/Header/Header";
import Footer from "./App/Footer/Footer";
import VideoPlayer from "./App/Utility/VideoPlayer/VideoPlayer";
import { useSelector } from "react-redux";

function App() {
  const { isVideoOn } = useSelector((state) => state.events);
  return (
    <>
      <VideoPlayer />
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
