import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      {/* Gallery Title and Description */}
      <div className="text-center mb-12 leading-relaxed">
        <h1 className="mt-4 text-3xl font-semibold font-playfair">Explore Our Beautiful Gallery</h1>
        
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {/* Gallery Image 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <img src="/img/cover.jpg" alt="Gallery Image 1" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-300"></div>
        </div>

        {/* Gallery Image 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <img src="/img/cover2.jpg" alt="Gallery Image 2" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-300"></div>
        </div>

        {/* Gallery Image 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <img src="/img/cover3.jpg" alt="Gallery Image 3" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-300"></div>
        </div>

        {/* Gallery Image 4 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <img src="/img/cover4.jpg" alt="Gallery Image 4" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-300"></div>
        </div>

        {/* Gallery Image 5 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <img src="/img/cover5.jpg" alt="Gallery Image 5" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-300"></div>
        </div>

        {/* Gallery Image 6 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <img src="/img/cover.jpg" alt="Gallery Image 6" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}
