import React from 'react'
import Navbar from './Components/Navbar';
import { Cards } from './Components/Cards';
import { ImgCards } from './Components/ImgCards';
import Grid from './Components/Grid';
import { MensCloth } from './Components/MensCloth';
import { Womens } from './Components/Womens';
import Food from './Components/Food';
import FoodBanner from './Components/FoodBanner';
import Sdata from './Components/Sdata';
import BooksBanner from './BooksBanner';
import Bdata from './Components/Bdata';
import { Books } from './Components/Books';
import CartBanner from './Components/CartBanner';
import { CartProvider } from 'react-use-cart';
import Cart from './Components/Cart';

// import Categories from './Components/Categories';

const App = () => {
  return (
    <>
      <Navbar/>
      <Grid/>
      <Cards/><br/>
      <ImgCards/><br/>
      <MensCloth/><br/>
      <Womens/><br/>
      <FoodBanner/>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-between'}}>
      {Sdata.map((val)=>
      {
        return(
          <Food imgsrc={val.imgsrc}
          price={val.price}
          sname={val.sname}/>
          
        )
      })}
      </div><br/>
      <BooksBanner/>

      <CartProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-between'}}>

      {Bdata.map((val,index)=>
      {
        return(
          <Books img={val.img}
          title={val.title}
          price={val.price}
          key={index}
          description={val.description}
          item={val}/>
        )
      })}
      </div>
      <br/>

      <CartBanner/>
      <Cart/>
      </CartProvider>
      
    </>
  )
}

export default App;
