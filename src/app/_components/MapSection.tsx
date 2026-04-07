"use client";

import React from "react";

const  MapSection = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.311968658305!2d50.056124999999994!3d26.381107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIyJzUyLjAiTiA1MMKwMDMnMjIuMSJF!5e0!3m2!1sar!2seg!4v1752126764331!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ArtX Map"
      />
    </div>
  );
};

export default MapSection;
