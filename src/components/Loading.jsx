import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
     <video className="loading-image" autoPlay muted width="200px" loop playsInline controls={false}>
            <source src='/videos/toxic.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
  );
};

export default Loading;
