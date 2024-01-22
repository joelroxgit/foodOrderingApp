
import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import resList from './../utils/mockData';
import Shimmer from './Shimmer';
const Body = () => {

  const [resListdata, setresList] = useState([])
  const [filteredres,setfilteredres] = useState([]);
  const [searchText,setSearchText] = useState("")
  useEffect(() => {
    fetchData();
  }, []);
  
 

  const fetchData = async () => {
    
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    
    const restaurants =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const filter =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setfilteredres(filter)
    setresList(restaurants)
  }
  if(resListdata.length=== 0){
    return <Shimmer/>
  }

  return (

    <div className='body'>
      <div className="filter">
        <div className="searchbtn">
          <input type="text" className="searchbox" 
          value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
              const filteredRestaurant = resListdata.filter(
              (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
            )
            setfilteredres(filteredRestaurant)

          }}>Search
              </button>
        </div>
        <button className='filter-btn' onClick={() => {
          const filteredList = resListdata.filter((resdata) => resdata.avgRating > 4);
          setresList(filteredList)
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className='restro-container'>
        {
          filteredres.map((data) =>
            <RestaurantCard key={data.id}
              resdata={data} />)
        }
      </div>
    </div>
  )
}


export default Body