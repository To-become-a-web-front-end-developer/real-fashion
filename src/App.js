import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { Advertisement } from "./components/Advertisement";


function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      <Advertisement/>
    </div>
  );
}

export default App;
