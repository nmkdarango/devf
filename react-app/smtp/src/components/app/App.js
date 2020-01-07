import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './app.scss';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import Content from '../content/Content';
import Logo from '../logo/Logo';
import {BrowserRouter} from 'react-router-dom';


function App() {


  return (
    
    <BrowserRouter>
      <header className=" bg-light">
        <div className="header-background">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <Logo />  
              </div>
              <div className="col">
                
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Menu />
                </nav> 
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Content /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
    
  );
}

export default App;
