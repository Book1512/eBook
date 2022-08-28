import React from 'react';
import Header from './component/header.js';
import Shelf from './component/Home/shelf.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './component/Category/category.js';
import Aurthor from './component/Aurthor/aurthor.js';
import TPB from './component/TPB/tpb.js';
import About from './component/About Us/about.js';
import Footer from './component/footer.js';



function App() {
  return (
    <>
      <Header />
      <Shelf />
      <Category />
      <Aurthor />
      <TPB />
      <About />
      <Footer />
    </>



  );
}

export default App;
