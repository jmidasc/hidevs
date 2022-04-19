import React from 'react'
import Helmet from 'react-helmet'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer';

function App() {
  return (
    <div className="bodyhome">
      <Helmet title="Hi-Devs E-commerce LTD"/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
