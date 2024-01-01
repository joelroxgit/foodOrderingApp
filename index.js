import React from 'react';
import ReactDom from 'react-dom/client';
 
const Header =()=>{
    return(
        <div className='header'>
            <div className='logocontainer'>
                <img className ="logo" 
                src='https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg'/>
            </div>
            <div className='lists'>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
             </div>
        </div>
)}

const RestaurantCard =()=>{
    return(
        <div className='restro-cards'>
            <img className='res-card-logo'
            src='https://www.priyom.in/wp-content/uploads/2022/06/Chicken-Biriyani-500x500.png'/>
            <h3>Meghana Foods</h3>
            <h4>Biriyani,NorthIndian,Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body =()=>{
    return(
        <div className='body'>
            <div className="search">
                search
            </div>
            <div className='restro-container'>
               <RestaurantCard/> <RestaurantCard/> 
               <RestaurantCard/> <RestaurantCard/> <RestaurantCard/>
               <RestaurantCard/> <RestaurantCard/> <RestaurantCard/>
               <RestaurantCard/> <RestaurantCard/> 
            </div>
        </div>
    )
}
const Applayout = ()=>{
    return(
        <div className='app'> 
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Applayout/>)