import React from "react";

export function ImageStrip({ images }) {
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
                            e.currentTarget.style.display = "none";
                            e.currentTarget.parentElement?.classList.add("bg-slate-100");
                        }}
                    />
                </div>
            ))}
        </>
    );
}