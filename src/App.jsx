import { Outlet } from "react-router-dom";
import Header from "./App/Header/Header";
import Footer from "./App/Footer/Footer";
import { useAnim } from "./App/Context/AnimationContext";

function App() {
  const { homeAnimationDelay } = useAnim();


  return (
    <div className="app">
      {!homeAnimationDelay && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
