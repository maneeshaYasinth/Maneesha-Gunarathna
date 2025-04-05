import React from 'react';
import Tilt from 'react-parallax-tilt';

const TiltCard = ({ children, backgroundImage, backgroundColor, customStyles, ...props }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="#ffffff"
    glarePosition="bottom"
    glareBorderRadius="20px"
    {...props}
  >
    <div
      className={`p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-50 ${customStyles}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: backgroundColor || 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  </Tilt>
);

export default TiltCard;
