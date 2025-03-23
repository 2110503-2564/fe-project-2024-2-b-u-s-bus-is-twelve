'use client'
import { useRef, useEffect } from "react";

interface VlogPlayerProps {
  vdoSrc: string;
}

export function VlogPlayer({ vdoSrc }: VlogPlayerProps) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vdoRef.current) {
      vdoRef.current.play(); 
    }
  }, []);

  return (
    <div className="flex justify-start items-center w-full py-1 pl-4  ">

      <video
        className="w-[40%] h-auto rounded-lg object-cover ml-10"
        src={vdoSrc}
        ref={vdoRef}
        autoPlay
        loop
        muted
        controls={false}
      />

      <div className="ml-20 text-white max-w-sm ">
        <h3 className="mt-4 text-3xl font-semibold font-playfair text-black">Book Your Perfect Stay</h3>
        <p className="mt-4 py-2 text-xl text-black">
          Discover the best deals and unforgettable experiences with just a few clicks. 
          Whether you're seeking relaxation or adventure, we've got the perfect hotel for you!
        </p>
      </div>

    </div>
  );
}
