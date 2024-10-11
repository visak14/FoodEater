import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return ( 
    <div className=' mt-[30px]' id='food-display'>
     <h2 className='' style={{ fontSize:'max( 2vw , 24px)', fontWeight:'600'}}> 
        Top dishes near you
     </h2>
     <div  style={{ display:'grid', marginTop:'30px', rowGap:'50px', gridTemplateColumns:' repeat(auto-fill, minmax(240px, 1fr', gap: '30px'}}>
        {food_list.map((item, index)=> {
         if( category==="All" || category===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
         } 
        })}
     </div>
    </div>
  )
}

export default FoodDisplay