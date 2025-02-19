import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from './assets/hero/headphone.png';
import smartwatch from './assets/category/smartwatch2-removebg-preview.png';
import Product from './components/Products/Product';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';


const BannerData = {
  discount: '30% off',
  title: 'New Arrivals',
  date: '10 June to 28 June',
  image: headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: 'New Arrivals',
  bgColor: '#f42c37',
};

const BannerData2 = {
  discount: '30% off',
  title: 'New Arrivals',
  date: '10 June to 28 June',
  image: smartwatch,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: 'New Arrivals',
  bgColor: '#2dcc6f',
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(true);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Product />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
