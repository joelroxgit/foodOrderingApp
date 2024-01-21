import Body from "./Body";
import { CLOUDINARY } from './../utils/constants';

    // rest of the component code

  
const RestaurantCard =(props)=>{
    const {resdata} = props;

    const {name,locality,avgRating ,cuisines,cloudinaryImageId

    } = resdata.info
    return(
             <div className='restro-cards'>  
            <img className='res-card-logo'
            src={CLOUDINARY+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{locality}</h4>
            <h4>{avgRating}</h4>
            <h4>{cuisines}</h4>
        </div>
    )
};

export default RestaurantCard