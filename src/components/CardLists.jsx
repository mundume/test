
import React, {useState} from 'react'
import { useEffect } from 'react'

import '../App.css'


const CardLists = () => {

 const [dvd, setDvd] = useState(false)
 const [furniture, setFurniture] = useState(false)
  const [book, setBook] = useState(false)
  const [type, setType] = useState("DVD");
 
useEffect(()=>{
  type === "DVD" ? setDvd(true) : setDvd(false)
  type === "Furniture" ? setFurniture(true) : setFurniture(false)
  type === "Book" ? setBook(true) : setBook(false)
}, [type])

  function handleChange(event) {
    setType(event.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault();

  }
  
    
  
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      margin:'auto',
    
    }}>
      <div style={{
        margin:'20px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',

      
      }}>
        <h1>Add Product</h1>
      <div>
      <button  style={{
        outline:'none',
        border:'1px solid red',
        padding:'4px',
        marginLeft:'10px',
        width:'60px',
        borderRadius:'5px',
        background:'transparent',
        color:'red',

          
      }}>Cancel</button>
      <button style={{
        outline:'none',
        border:'1px solid lightblue',
        padding:'4px',
        marginLeft:'10px',
        width:'60px',
        borderRadius:'5px',
        background:'transparent',
       
        
      }} > Save</button>
      </div>
      </div>
      
      
      <form style={{
       display:'flex',
        flexDirection:'column',
        maxWidth: '1200px',
        marginLeft:'20px',
        
      }} onSubmit={handleSubmit}>
        <label className='inputs' htmlFor="east" id='SKU'>SKU :
        <input type="text" className='text' />
        </label>
        
        <label htmlFor="east" id='name'>NAME :
        <input type="text" className='text' />
        </label>
       <label htmlFor="east" id='price'> PRICE :
        <input type="text"  className='text'/>
        </label>
        
        <select value={type} onChange={handleChange} style={{
          padding:'4px',
          margin:'10px 0px',
          width:'100px',
          border:'1px solid lightblue',
        }}>
          <option value="DVD">DVD</option>
          <option value="Furniture">Furniture</option>
          <option value="Book">Book</option>
          </select>
          {dvd && <label htmlFor="east" id='name'>Size(MB)
        <input type="text" className='text' />
        </label>}
       {furniture &&<label htmlFor="east" id='price'> Height(CM)
        <input type="text"  className='text'/>
        </label>}
        {furniture&&<label htmlFor="east" id='name'>Width(CM)
        <input type="text" className='text' />
        </label>}
       {furniture &&<label htmlFor="east" id='price'> Length(CM)
        <input type="text"  className='text'/>
        </label>}
        {book &&<label htmlFor="east" id='name'>Weight(KG)
        <input type="text" className='text' />
        </label>}
        
      </form>
    </div>
  )
}

export default CardLists