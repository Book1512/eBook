import React from 'react';
import Header from './component/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sliders from './component/slider.js';
// import BasicExample from './component/form.js';
// import Clock from './component/clock.js';
import Shelf from './component/shelf.js';


function App() {
  return (
    <React.Fragment>
    <Header />
    <Shelf/>
    {/* <Sliders /> */}
    
    {/* <BasicExample /> */}
    </React.Fragment>
  );
}

export default App;
