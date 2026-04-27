import React from "react";

interface ImageStripProps {
    images: string[];
}

export const ImageStrip: React.FC<ImageStripProps> = ({ images }) => {
    return (
        <>
            {images.flatMap((src, i) => (
                <div
                    key={`${src}-${i}`}
                    className="h-full flex-[0_0_calc(80%-1rem)] sm:flex-[0_0_calc((70%-2rem)/3)] rounded-lg overflow-hidden shrink-0 border border-slate-200"
                >
                    <img
                        src={src}
                        alt=""
                        className="object-cover w-full h-full"
                        onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = "none";
                            target.parentElement?.classList.add("bg-slate-100");
                        }}
                    />
                </div>
            ))}
        </>
    );
}
