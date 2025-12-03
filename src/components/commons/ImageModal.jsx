import React from "react";

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-500 transition-colors"
        >
          &times;
        </button>
        <img
          src={src}
          alt="Full screen view"
          className="max-h-[95vh] max-w-[95vw] object-contain shadow-2xl rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal;
