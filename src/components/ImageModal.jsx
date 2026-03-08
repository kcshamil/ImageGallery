import React, { useEffect } from 'react'

function ImageModal({ images, selectedIndex, setSelectedIndex, closeModal }) {

  if (selectedIndex == null) return null;

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);  //circular navigation
  }

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const handleKey = (e) => {

      if (e.key == "ArrowRight") {
        nextImage()
      }

      if (e.key == "ArrowLeft") {
        prevImage()
      }

      if (e.key == "Escape") {
        closeModal()
      }

    }
    window.addEventListener("keydown", handleKey)

    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  }, [selectedIndex])

  return (
    <div className='modal-overlay'>
      <button className='close-btn' onClick={closeModal}>✕</button>
      <button className='nav-btn prev' onClick={prevImage}>‹</button>
      <img src={images[selectedIndex].img} alt="image" className='modal-image' />
      <div className="overlay"
      >
        <h6 className='font-monospace'>{images[selectedIndex].title}</h6>

        <div className="d-flex justify-content-between">
          <p className="category mb-0 small">{images[selectedIndex].category}</p>
          <p className="author mb-0 small">{images[selectedIndex].author}</p>
        </div>

      </div>

      <button className='nav-btn next' onClick={nextImage}>›</button>

    </div>
  )
}

export default ImageModal