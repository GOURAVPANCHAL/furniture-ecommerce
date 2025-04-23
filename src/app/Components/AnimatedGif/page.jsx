"use client";
import React from "react";

const AnimatedMedia = ({ src, alt = "Animation", loop = true, className = "", style = {} }) => {
  if (!src) return null;

  return (
    <div className={`animated-media ${className}`} style={{ maxWidth: "100%", ...style }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
        autoPlay
        loop={loop ? "loop" : undefined}
      />
    </div>
  );
};

export default AnimatedMedia;
