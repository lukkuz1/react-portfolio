import { useState, useEffect } from "react";

// A custom hook to lazily load images
export const useLazyImage = (src: string): string => {
  const [loadedImage, setLoadedImage] = useState<string>(src); // This holds the final image source URL
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const imgElement = document.createElement("img");
    imgElement.src = src;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsIntersecting(true); // Trigger when the image is in the viewport
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // The image is considered visible if 10% of it is in the viewport
    );

    observer.observe(imgElement);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  // Return either the source URL when it's intersected (visible) or a placeholder for lazy loading
  return isIntersecting ? src : "https://via.placeholder.com/200"; // A small placeholder image
};
