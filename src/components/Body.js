
import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import shimmer from './shimmer'
import resList from "../utils/mockData"
const Body = () => {

  let [resListdata, setresList] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    
    const restaurants =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setresList(restaurants)
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  return (
    <div className='body'>
      <div className="filter">
        <button className='filter-btn' onClick={() => {
          const filteredList = resListdata.filter((resdata) => resdata.avgRating > 4);
          setresList(filteredList)
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className='restro-container'>
        {
          resListdata.map((data) =>
            <RestaurantCard key={data.id}
              resdata={data} />)
        }
      </div>
    </div>
  )
}


export default Body