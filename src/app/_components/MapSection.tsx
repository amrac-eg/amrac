"use client";

import React from "react";

const MapSection = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3426.9107910741873!2d30.304589999999997!3d31.299466999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE3JzU4LjEiTiAzMMKwMTgnMTYuNSJF!5e1!3m2!1sar!2seg!4v1775659250992!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="AMRAC Map"
      />
    </div>
  );
};

export default MapSection;
