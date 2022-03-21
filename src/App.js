import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, SingleFood} from "./pages";
import Header from "./components/Header/Header";
import HeaderTop from "./components/Header/HeaderTop";
import Footer from "./components/Footer/Footer";
import {useState} from "react";

// css
import './assets/styles/flex-box.css';
import './assets/styles/global.css';
import './assets/styles/main.scss';

function App() {
    const [like, setLikes] = useState(false);
    const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
        <HeaderTop />
        <Header />
      <Routes>
        <Route path='/' element={<Home like={like} setLikes={setLikes} modal={modal} setModal={setModal} />} />
        <Route path='single/:id' element={<SingleFood like={like} setLikes={setLikes} modal={modal} setModal={setModal} />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
