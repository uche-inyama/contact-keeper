import React from 'react'

const Rocket = ({ rocket }) => {
  const { id, rocket_name, description, flickr_images } = rocket
  const image_url = flickr_images[0]

  return (
    <div className="rocket-wrapper">
      <div className="rocket-image-wrapper">
        <img src={image_url} alt="rocket-img" />
      </div>
      <div className="article">
        <p>{rocket_name}</p>
        <div>{description}</div>
        <div>button</div>
      </div>
    </div>
  )
}

export default Rocket;