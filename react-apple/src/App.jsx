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
import { Routes, Route } from 'react-router-dom';
import Routerfile from './Routerfile';
import Product from '../Product';
function App() {
  return (
    <> 
     
    <Routes>   
      <Route path="/" element={<Routerfile/>}>    
     <Route path="/phone" element={<Alertt />} />
     <Route path="/iphone" element={<FirstSection/>}/>
     <Route path="/ipad" element={<SecondSection/>}/>
      <Route path="/watch" element={<ThirdSection/>}/>
      <Route path="/apple" element={<FourthSection/>} />
       <Route path="/new" element={<FifthSection/>} />  
      <Route path="/product/:id" element={<Product/>} />
       </Route> 
</Routes> 

{/* 
<SixthSection/> */}
      {/* <cutom/> */}
    </>
  );
}

export default App;