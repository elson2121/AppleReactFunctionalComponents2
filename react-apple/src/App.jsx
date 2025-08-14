// import "./assets/css/bootstrap.css"
// import cutom from "./assets/components/Footer/custom.js"
import Header from './assets/components/Header/Header';
 import Alertt from './assets/components/Alertt/Alertt';
import FirstSection from './assets/components/FirstSection/FirstSection';
import SecondSection from './assets/components/SecondSection/SecondSection';
import ThirdSection from './assets/components/ThirdSection/ThirdSection';
import FourthSection from './assets/components/FourthSection/FourthSection';
import FifthSection from './assets/components/FifthSection/FifthSection';
import SixthSection from './assets/components/SixthSection/SixthSection';
import Footer from './assets/components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Alertt/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
      {/* <cutom/> */}
    </>
  );
}

export default App;