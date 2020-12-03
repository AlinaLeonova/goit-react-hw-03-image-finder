import React from "react"
import PropTypes from "prop-types"

const ImageGalleryItem = ({
  cardImage,
  srcOriginal,
  getLargeImageURL
}) => {

  const handleClick = event => getLargeImageURL(event.target.dataset.source);

  return (
    <li className="ImageGalleryItem">
      <img
        src={cardImage}
        className="ImageGalleryItem-image"
        onClick={handleClick}
        data-source={srcOriginal}

      />
    </li>
  )

}

ImageGalleryItem.propTypes = {
  cardImage: PropTypes.string,
  alt: PropTypes.string.isRequired,
  srcOriginal: PropTypes.string.isRequired,
  getLargeImageURL: PropTypes.func.isRequired

}

export default ImageGalleryItem
