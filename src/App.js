import React, { useState } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Storelocater from './Components/Storelocater';
import Favourites from './Components/Favourites';
import Woman from './Components/Topnav/Woman';
import Product from './Components/Product';


function App() {

  const [productSearchFilter, setProductSearchFilter] = React.useState('');

  //const [addNewFavoriteProduct, setAddNewFavoriteProduct] = useState(0);

  //const handleClick = (event, favorites) => {
  //  console.log(event.target);

  //  setAddNewFavoriteProduct(current => current + favorites);
//  };

  const productSearchHandler = (productSearchValue) => {
    console.log('productSearchHandler function sending up' , productSearchValue);
    setProductSearchFilter(productSearchValue);
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar productSearchHandler={productSearchHandler} />
      <Routes>
        <Route exact path='/' element={ <Homepage productSearchFilter={productSearchFilter} />} />
        <Route path='/newsletter' element={ <Newsletter  />} />
        <Route path='/storelocater' element={ <Storelocater />} />
        <Route path='/favourites' element={ <Favourites />} />
        <Route path='/woman' element={ <Woman />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
