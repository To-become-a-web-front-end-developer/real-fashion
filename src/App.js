import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { Advertisement } from "./components/Advertisement";
import Benefit from "./components/Benefit";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import HomeBanner from "./components/HomeBanner";
// import { MobileMenu } from "./components/MobileMenu";
// import { HomeCartView } from "./components/HomeCartView";


function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      {/* <HomeCartView/> */}
      {/* <MobileMenu/> */}
      <HomeBanner/>
      <Advertisement/>
      <Benefit/>
      <CategoryBanner/>
      <Heading/>
      <Footer/>
    </div>
  );
}

export default App;
