import React, { useState } from 'react'
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import img5 from "../assets/images/img5.jpg"
import img6 from "../assets/images/img6.jpg"
import img7 from "../assets/images/img7.jpg"
import img8 from "../assets/images/img8.jpg"
import img9 from "../assets/images/img9.jpg"
import img10 from "../assets/images/img10.jpg"
import img11 from "../assets/images/img11.jpg"
import img12 from "../assets/images/img12.jpg"
import img13 from "../assets/images/img13.jpg"
import img14 from "../assets/images/img14.jpg"
import img15 from "../assets/images/img15.jpg"
import img16 from "../assets/images/img16.jpg"

import ImageModal from './ImageModal'




function Gallery() {
const images = [
  { img: img1, height: 500, title: "Dream Portal", category: "Portrait", author: "Mika Tanaka" },
  { img: img2, height: 300, title: "Vintage Hotel Sign", category: "Cityscape ", author: "Daniel Romero" },
  { img: img3, height: 500, title: "Stone Texture Pattern ", category: "Landscape", author: "Kwame Mensah" },
  { img: img4, height: 300, title: " Sunlit Tower View", category: "Architecture", author: "Sophie Laurent" },

  { img: img5, height: 300, title: "Geese in the Field", category: "Food ", author: "Thomas Becker" },
  { img: img6, height: 500, title: "Canton Tower Skyline", category: "", author: "Li Wei" },
  { img: img8, height: 300, title: " Fresh Lemon Basket", category: " Food", author: "Elena Petrova" },
  { img: img7, height: 500, title: "City Skyline Morning", category: "Cityscape", author: "Arjun Patel" },

  { img: img9, height: 500, title: " Savannah Ritual", category: "Landscape Culture", author: "Marco Alvarez" },
  { img: img10, height: 300, title: "Sunset Cliff Edge", category: "Abstract", author: "Olivia Martin" },
  { img: img11, height: 500, title: "Golden Autumn Leaves", category: "Nature", author: "Noah Bennett" },
  { img: img12, height: 300, title: "Honey Pancakes Stack", category: "Food", author: "Hannah Cooper" },

  { img: img13, height: 300, title: "Barn Owl Portrait", category: "Portrait", author: "Carlos Mendes" },
  { img: img14, height: 500, title: "Golden Costume Dance", category: "Wildlife", author: "Yuki Nakamura" },
  { img: img15, height: 300, title: "Morning Pastry", category: "Architecture", author: "Emily Carter" },
  { img: img16, height: 500, title: "Lonely Wanderer", category: "Black & White", author: "Victor Moreau" }
]
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
                alt="Nature"
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