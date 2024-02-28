import "./App.css";

import AboutUs from "./components/AboutUs";
import Hotel from "./components/Hotel";
import Header from "./global/Header";
import Banner from "./components/Banner";
import Destination from "./components/Destination";
import Footer from "./global/Footer";
import Bank from "./components/Bank";

//Visa
import Saudia from "./components/Saudia";
import UAE from "./components/UAE";
import Azerbaijan from "./components/Azerbaijan";
import MoreVisa from "./components/MoreVisa";

// Umrah
import EconomyPkg from "./components/EconomyPkg";
import RamzanPkg from "./components/RamzanPkg";
import ThreeStar from "./components/ThreeStar";
import FourStar from "./components/FourStar";
import UmrahCalc from "./components/UmrahCalc";
import UmrahGuide from "./components/UmrahGuide";

// Services
// import TravelInsurance from "./components/TravelInsurance";
// import VisaAssistance from "./components/VisaAssistance";
// import HotelAccomadation from "./components/HotelAccomadation";
// import RentCar from "./components/RentCar";
// import Ticketing from "./components/Ticketing";

//Gallery
import Gallery from "./components/Gallery";
// import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Details } from "@mui/icons-material";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Header />
        {/* <Chat/> */}
        <Routes>
          <Route exact path='/' element={ <><Banner/>
        <h6 style={{textAlign:"center",background:"blue",color:"white"}}>POPULAR DESTINATIONS</h6>   
          <Destination/><Footer/></>}/>
          <Route path='/hotel' element={<Hotel/>}/>
          <Route path='/bank' element={<Bank/>}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contactus' element={<ContactUs/>}/>

          <Route path='/saudia' element={<Saudia/>}/>
          <Route path='/uae' element={<UAE/>}/>
          <Route path='/azerbaijan' element={<Azerbaijan/>}/>
          <Route path='/morevisas' element={<MoreVisa/>}/>

          <Route path='/economy' element={<EconomyPkg/>}/>
          <Route path='/ramzanpkg' element={<RamzanPkg/>}/>
          <Route path='/threestar' element={<ThreeStar/>}/>
          <Route path='/fourstar' element={<FourStar/>}/>
          <Route path='/umrahcal' element={<UmrahCalc/>}/>
          <Route path='/umrahguide' element={<UmrahGuide/>}/>
          <Route path='/services' element={<Services/>}/>

          {/* <Route path='/insurance' element={<TravelInsurance/>}/>
          <Route path='/assistance' element={<VisaAssistance/>}/>
          <Route path='/accomadation' element={<HotelAccomadation/>}/>
          <Route path='/rent' element={<RentCar/>}/>
          <Route path='/ticketing' element={<Ticketing/>}/> */}

          <Route path='/gallery' element={<Gallery/>}/>

        </Routes>   
        <br/>


    </>
  );
}

export default App;