// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const GalleryCard = ({ product }) => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const page = searchParams.get('page');

//     const hasVideo = product.image.some((item) => item.includes('/videos/'));
//     const [isHovered, setIsHovered] = useState(false);
//     const handleHover = () => {
//       setIsHovered(true);
//     };
  
//     const handleMouseLeave = () => {
//       setIsHovered(false);
//     };
//     return (
//     <div className="gallery-card">
//     <Link to={`/gallery/${product.id}?page=${page}`}>
//     {hasVideo ? (
//           <video className="gallery-video" autoPlay width="auto" loop muted={!isHovered} onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>
//             <source src={product.image[0]} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img src={product.image[0]} alt={product.name} className="gallery-image" />
//         )}
        
//       <div className="gallery-info">
//         <h3 className="gallery-name">{product.name}</h3>
//         <h3 className="gallery-date">{product.date}</h3>
//         <p className="gallery-media">{product.media}</p>
//       </div>
//       </Link>
//     </div>
//   );
// };

// export default GalleryCard;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const GalleryCard = ({ product, currentPage }) => {
  const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');

    console.log("currentPage on gallerycard", page)
    
    const hasVideo = product.image.some((item) => item.includes('/videos/'));
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
    <div className="gallery-card">
    <Link to={`${product.id}?page=${currentPage}`}>
    {hasVideo ? (
          <video className="gallery-video" autoPlay width="auto" loop muted={!isHovered} onMouseOver={handleHover} onMouseLeave={handleMouseLeave} playsInline controls={false}>
            <source src={product.image[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={product.image[0]} alt={product.name} className="gallery-image" />
        )}
      </Link>
    </div>
  );
};

export default GalleryCard;