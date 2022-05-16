import './App.css';
// import Nav from './components/Nav'
import NewNav from './components/Navbar/index'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Footer from './components/Footer'


function App() {
  return (
   <div>
   <Router>
     <NewNav />
  </Router>
     <Home/>
     <Product />
     <Footer />
   </div>
    
  );
}

export default App;
