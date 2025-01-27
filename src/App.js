import './App.css';
import Navigation from './components/Navigation/Navigation';
import About from './Page/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Shop , Contact , Laptop , Monitor , Information , Asseserise , About} from './Page'
import Shop from './Page/Shop';
import Contact from './Page/Contact';
import Laptop from './Page/Laptop';
import Monitor from './Page/Monitor';
import Information from './Page/Information';
import Asseserise from './Page/Asseserise';
import Asus from './components/LaptopMenu/Asus';
import Mis from './components/LaptopMenu/Mis';
import Tuf from './components/LaptopMenu/Tuf';
import Keyboard from './components/LaptopMenu/Keyboard';
import MonitorProduct from './components/LaptopMenu/MonitorProduct';
import HeadPhone from './components/LaptopMenu/HeadPhone';
import CardShop from './Page/CardShop';
import Service from './components/Servies/Service';
// import Product from './Page/Product';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navigation />
      <Routes>
        <Route path='/' element = {<Shop />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/laptop' element = {<Laptop/>}/>
        <Route path='/monitor' element = {<Monitor/>}/>
        <Route path='/information' element = {<Information />} />
        
        <Route path='/asseserise' element = {<Asseserise />}/>
        <Route path='/cardshop' element = {<CardShop />} />
        <Route path='/service' element = {<Service />} />

        <Route path='/asus' element = {<Asus/>} />
        <Route path='/msi' element = {<Mis />} />
        <Route path='/tuf' element = {<Tuf />} />
        <Route path='/monitorproduct' element= {<MonitorProduct />} />
        <Route path='/keyboard' element= {<Keyboard />} />
        <Route path='/headphone' element= {<HeadPhone />} />
       
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
