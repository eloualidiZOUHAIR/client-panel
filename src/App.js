//* BrowserRouter : composant pour définir le contexte du routeur
import React, { Component } from 'react';
import { Provider } from '../src/components/context';
import Contacts from './components/contact/Contacts';
import Navbar from './components/navbar/Navbar';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Home" id="1" name="zouhair" />
          <Provider>
            <Routes>
              <Route exact path="/" element={<Contacts />} />
              <Route exact path="/contact/add" element={<AddContact />} />
              <Route exact path="/contact/edit/:id" element={<EditContact />} />
              <Route exact path="/about/:id/:name" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
