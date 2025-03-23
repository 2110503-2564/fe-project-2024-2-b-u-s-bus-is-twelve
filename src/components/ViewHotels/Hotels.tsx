import Image from "next/image";

export default function Hotels() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full px-20 py-4">
        <div className="flex items-center justify-between mt-4 leading-relaxed">
          <div className="text-4xl font-semibold font-playfair text-left">
            Your Dream <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Luxurious Hotel Room
          </div>

          <div className="ml-8 text-lg text-gray-800">
            <p>Click "Select" to view <br />
              hotel details and make a reservation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {/* Hotel Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img src="/img/cover4.jpg" alt="Hotel Room" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Hotel Name</h2>
              <p className="text-sm text-gray-500">Location Name</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">$250 per night</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300">Select</button>
              </div>
            </div>
          </div>

          {/* Hotel Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img src="/img/cover4.jpg" alt="Hotel Room" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Hotel Name</h2>
              <p className="text-sm text-gray-500">Location Name</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">$250 per night</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300">Select</button>
              </div>
            </div>
          </div>

          {/* Hotel Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img src="/img/cover4.jpg" alt="Hotel Room" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Hotel Name</h2>
              <p className="text-sm text-gray-500">Location Name</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">$250 per night</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300">Select</button>
              </div>
            </div>
          </div>

          {/* Hotel Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img src="/img/cover4.jpg" alt="Hotel Room" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Hotel Name</h2>
              <p className="text-sm text-gray-500">Location Name</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">$250 per night</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300">Select</button>
              </div>
            </div>
          </div>

          {/* Hotel Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img src="/img/cover4.jpg" alt="Hotel Room" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Hotel Name</h2>
              <p className="text-sm text-gray-500">Location Name</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">$250 per night</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300">Select</button>
              </div>
            </div>
          </div>

          {/* Hotel Card 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img src="/img/cover4.jpg" alt="Hotel Room" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">Hotel Name</h2>
              <p className="text-sm text-gray-500">Location Name</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">$250 per night</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300">Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
