import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Gallery() {
  const navigate = useNavigate()
  const concertImages = [
    "/concert-series/1.jpg",
    "/concert-series/2.jpg",
    "/concert-series/7.jpg",
    "/concert-series/8.jpg",
    "/concert-series/9.jpg",
    "/concert-series/10.jpg",
    "/concert-series/11.jpg",
    "/concert-series/12.jpg",
    "/concert-series/13.jpg",
    "/concert-series/14.jpg",
    "/concert-series/15.jpg",
    "/concert-series/16.jpg",
    "/concert-series/17.jpg",
    "/concert-series/18.jpg",
    "/concert-series/19.jpg",
  ]

  return (
    <div className="bg-gradient-to-br from-purple-50 to-orange-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-purple-600 hover:text-purple-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Our Work
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Concert Series Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concertImages.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Concert ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}