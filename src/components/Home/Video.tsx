import { useState } from "react";
import { VlogPlayer } from "./VlogPlayer";

export default function Video() {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <VlogPlayer vdoSrc="/video/hotel.mp4" />
      </div>
    </div>
  );
}
