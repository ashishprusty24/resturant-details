import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Resturant from './components/Resturant';
import userinfo from './data/userinfo.json';
import offers from './data/offers.json';
import resturant from "./data/resturant.json";


function App() {
  return (
    <div>
      <Navbar {...userinfo.location} />
     
       <Offer offers={offers}/>
       <Filter/>
       <Resturant resturant = {resturant}/>

    </div>
    
  );
}

export default App;
