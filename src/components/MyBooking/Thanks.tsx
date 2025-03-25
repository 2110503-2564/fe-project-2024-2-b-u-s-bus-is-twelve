import Image from "next/image";

export default function Thanks() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Container for the image and text */}
      <div className="relative w-[80%] h-[400px] sm:h-[400px] md:h-[400px] rounded-full  overflow-hidden shadow-lg">
        {/* Image with rounded corners */}
        <Image
          src="/img/thanks.jpg"  // Replace with your image path
          alt="Thank You"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-4 font-playfair">
          Thank You for Choosing to Book with Us!
        </div>
      </div>
    </div>
  );
}
