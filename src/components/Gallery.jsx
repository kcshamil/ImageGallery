import React, { useState } from 'react'
import ImageModal from './ImageModal'
import { images } from "../data/galleryData"

  
function Gallery() {

  const [selectedIndex, setSelectedIndex] = useState(null)

  const openModal = (index) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)

  }

  return (



    <div className="container-fluid bg-light py-5">
      <div className="container">

        <div className="masonry">

          {images.map((item, index) => (

            <div className="gallery-card" key={index} style={{ height: item.height }}>

              <img
                src={item.img}
                alt={item.title}
                style={{ objectFit: "cover" }}
                onClick={() => openModal(index)}
                
              />

              <div
                className="overlay"
              >
                <h6 className='font-monospace'>{item.title}</h6>

                <div className="d-flex justify-content-between">
                  <p className="category mb-0 small">{item.category}</p>
                  <p className="author mb-0 small">{item.author}</p>
                </div>

              </div>

            </div>

          ))}

          <ImageModal
            images={images}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            closeModal={closeModal}
          />

        </div>

      </div>
    </div>
  )
}

export default Gallery