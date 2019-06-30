import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HamburgerNav from './HamburgerNav'
import HomePage from './HomePage'
import Footer from './Footer'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Blogs from './Blogs'

function App() {
  return (
    <div>
      <HamburgerNav />
      <Footer />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
