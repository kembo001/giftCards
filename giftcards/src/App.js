import './App.css';
// import Nav from './components/Nav'
import NewNav from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import Footer from './components/Footer'


function App() {
  return (
   <div>
     {/* <Nav /> */}
     <NewNav />
     <Home/>
     <Product />
     <Footer />
   </div>
    
  );
}

export default App;
