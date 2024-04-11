import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Navbar1 from './Components/Navbar';
import Slider from './Components/Slider';
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
<div className="app">


<Navbar1/>
<Slider/>
<Services/>
<Footer/>


</div>


  );
}

export default App;
