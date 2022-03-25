import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, SingleFood, Wishlist} from "./pages";
import Header from "./components/Header/Header";
import HeaderTop from "./components/Header/HeaderTop";
import Footer from "./components/Footer/Footer";

// css
import './assets/styles/flex-box.css';
import './assets/styles/global.css';
import './assets/styles/main.scss';

function App() {

  return (
    <BrowserRouter>
        <HeaderTop />
        <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single/:id' element={<SingleFood />} />
          <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
