import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import AppRoutes from "./routes"


function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      <AppRoutes/>
    </div>
  );
}

export default App;
