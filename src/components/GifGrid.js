import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: images, loading} = useFetchGifs(category);
    
    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);

    //  useEffect(async() => {
    //     getGifs(category)
    //         // .then(img=> setImages(img));
    //         .then( setImages );
        
    //  }, [category])


    // const onHandleButton = ()=>{
    //     setCount(count+1);
    // }

  return (
      <>
        <h3>{ category }</h3>
        {/* {loading ? 'cargando...' : 'Cargada'} */}
        {loading && <p className="animate__animated animate__flash">Cargando</p> }

        {/* <button onClick={onHandleButton}>{count}</button> */}
        <div className="card-grid">    
            
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img} />
                ))}
        </div>
      </>
  )
}
