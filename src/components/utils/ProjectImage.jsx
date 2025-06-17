import React, { useState } from "react";


const ProjectImage = ({ image, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-60 w-full overflow-hidden rounded-xl">
      {!loaded}
      <img
        src={image}
        onLoad={() => setLoaded(true)}
        className={`absolute top-0 left-0 h-full w-full object-cover rounded-xl transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        alt={alt}
      />
    </div>
  );
};

export default ProjectImage;