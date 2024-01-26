import { useEffect, useState } from 'react'
import { RESTAURANTMENU } from '../utils/constants'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
  const [RestaurantMenu, setRestaurantMenu] = useState([])
  useEffect(() => {
    fetchMenu()
    console.log(RestaurantMenu)
  }, [])
  const resid = useParams()
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANTMENU + resid)
    const json = await data.json()
    console.log(json)
    const filteredjson = json?.data?.cards[0]?.card?.card?.info
    console.log(filteredjson)
    setRestaurantMenu(filteredjson)
    console.log(RestaurantMenu)
  }

  return (
    <div>
      <ol>
        <li>{RestaurantMenu.name}</li>
        <li>{RestaurantMenu.cuisines}</li>
        <li>{RestaurantMenu.costForTwo}</li>
        <li>{RestaurantMenu.avgRating}</li>
      </ol>
    </div>
  )
}

export default RestaurantMenu
