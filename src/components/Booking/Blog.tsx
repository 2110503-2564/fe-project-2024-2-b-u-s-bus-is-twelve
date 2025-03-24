import Image from "next/image";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-white">
      {/* Blog Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-black font-playfair">Blog <br />about TRAVEL</h1>
        <p className="text-lg text-gray-800 max-w-md">
          Explore the beauty of different <br/> destinations, culture, and adventure <br/>through these travel blogs.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Large Image with Description Below */}
        <div>
          <div className="relative mb-4">
            <Image
              src="/img/cover.jpg"
              alt="Travel Destination"
              width={500}
              height={400}
              className="rounded-lg object-cover w-full h-full hover:scale-105 transition-all duration-500"
            />
          </div>
          <p className="text-center text-lg text-gray-800 ">
            Discover the Hidden Gems of the World
          </p>
        </div>

        {/* Right Side: Two Images with Text Below */}
        <div className="space-y-6 px-10">
          <div className="relative">
            <Image
              src="/img/cover3.jpg"
              alt="Beach"
              width={400}
              height={300}
              className="rounded-lg object-cover hover:scale-105 transition-all duration-500"
            />
            <p className="text-center mt-2 text-lg text-gray-800">Relax by the Pristine Beaches</p>
          </div>

          <div className="relative">
            <Image
              src="/img/cover6.jpg"
              alt="Mountain Adventure"
              width={400}
              height={300}
              className="rounded-lg object-cover hover:scale-105 transition-all duration-500"
            />
            <p className="text-center mt-2 text-lg text-gray-800">Conquer Majestic Mountains</p>
          </div>
        </div>
      </div>
    </div>
  );
}
