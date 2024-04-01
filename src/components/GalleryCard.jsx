// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';


// const GalleryCard = ({ product, currentPage }) => {
//   const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const page = searchParams.get('page');

//     console.log("currentPage on gallerycard", page)
    
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
//     <Link to={`${product.id}?page=${currentPage}`}>
//     {hasVideo ? (
//           <video className="gallery-video" autoPlay width="auto" loop muted={!isHovered} onMouseOver={handleHover} onMouseLeave={handleMouseLeave} playsInline controls={false}>
//             <source src={product.image[0]} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img src={product.image[0]} alt={product.name} className="gallery-image" />
//         )}
//       </Link>
//     </div>
//   );
// };

// export default GalleryCard;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GalleryCard = ({ product, currentPage, showViolentContent }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');
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
        {showViolentContent || !product.hasViolence ? (
          hasVideo ? (
            <video className="gallery-video" autoPlay width="auto" loop muted={!isHovered} onMouseOver={handleHover} onMouseLeave={handleMouseLeave} playsInline controls={false}>
              <source src={product.image[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={product.image[0]} alt={product.name} className="gallery-image" />
          )
        ) : (
          // Display a message or placeholder for violent content when showViolentContent is false
          <div className="restricted-content-container">
            {/* <h3> Warning! </h3> */}
            <div> 
            <video className="warning-image" autoPlay muted width="200px" loop playsInline controls={false}>
            <source src='/videos/toxic.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
           <p>Viewer's discretion advised. If you would like to view this piece, click the button with the eye with the slash.</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default GalleryCard;
