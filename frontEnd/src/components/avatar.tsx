"use client";
import { useState } from "react";

export default function Avatar({ src, alt }: { src: string, alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-blue-200"
      onError={() => setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}`)}
    />
  );
}