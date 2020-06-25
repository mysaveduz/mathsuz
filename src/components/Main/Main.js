import React from 'react';

import Header from './Header/Header.js';
import Whymaths from './Whymaths/Whymaths.js';
import Whyus from './Whyus/Whyus.js';
import Login from './Login/Login.js';
import Footer from './Footer/Footer.js';

export default function Main(props) {
  console.log(props)

  return (
    <>
      <Header />
      <Whymaths />
      <Whyus />
      <Login />
      <Footer />
    </>
  );
}
