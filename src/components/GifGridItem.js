import React from 'react'

export const GifGridItem = ({id, name, url}) => {
    
  return (
    <div className="card animate__animated animate__fadeIn">
        <h4>{name}</h4>
        <img src={url} alt={name} />
    </div>
  )
}
