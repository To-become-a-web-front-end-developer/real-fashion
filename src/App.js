import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { Advertisement } from "./components/Advertisement";
import Benefit from "./components/Benefit";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";


function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      <Advertisement/>
      <Benefit/>
      <CategoryBanner/>
    </div>
  );
}

export default App;
