import  {useState , useEffect} from 'react'
import axios from 'axios'

import './Add.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
const Add = ({url}) => {

 
    const [image , setImage] = useState(false)
    const [data , setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"salad"
    })

    const onChangeHandler  = (e) => {
                 const name = e.target.name;
                 const value = e.target.value;
                setData(data=>({...data,[name]: value}))
    }

    const onSubmitHandler  =  async (e)=> {
          e.preventDefault();
          const formData = new FormData();
          formData.append("name" , data.name)
          formData.append("description" , data.description)
          formData.append("category" , data.category)
          formData.append("price" , Number(data.price) )
          formData.append("image", image)


          const res = await axios.post(`${url}/api/food/add` , formData );
          if(res.data.success){
               setData({
                  name:"",
                description:"",
                price:"",
                category:"salad"
               }) 
               setImage(false) 
               toast.success(res.data.message)

          } 
          else {
             toast.error(res.data.message)
          }


    }

    useEffect(()=> {
        console.log(data)
    },[data])

  return (
    <div className='add'>
        <form className=' flex-col'  onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
        <p> Upload Image</p>
        <label htmlFor='image'> 
        <img src={image?URL.createObjectURL(image):assets.upload_area} alt='' />
        </label>
        <input onChange={(e)=> setImage(e.target.files[0])} type='file' id='image' hidden required />
        </div>
              <div className='add-product-name flex-col'>
                  <p>Product name</p>
                  <input onChange={onChangeHandler} value={data.name}  type='text' name='name' placeholder='Type here ' />
              </div>

              <div className='add-product-description flex-col'>
                <p>Product Description</p>
                <textarea  onChange={onChangeHandler} value={data.description}  name='description' rows='6' placeholder='Write Content here'></textarea>
              </div>

              <div className='add-category-price'>
                <div className='add-category flex-col'>
                <p> Product Category</p>
                <select onChange={onChangeHandler}   name='category' className=' text-black '>
                    <option value=" Salad"  ></option>
                    <option value=" Rolls" ></option>
                    <option value=" Deserts" ></option>
                    <option value=" Sandwich" ></option>
                    <option value=" Cake" ></option>
                    <option value=" Pure Veg" ></option>
                    <option value=" Pasta" ></option>
                    <option value=" Noodles" ></option>
                </select>
                </div>
                <div className=' add-price flex-col'>
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price}  type='Number' name='price' placeholder='₹20' />
                </div>
              </div>
              <button type='submit' className='add-btn' >ADD</button>
        </form>
    </div>
  )
}

export default Add