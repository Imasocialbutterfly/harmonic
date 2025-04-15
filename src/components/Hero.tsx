import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-br from-purple-50 to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Turning Beats Into</span>
            <span className="block text-purple-600">Brighter Futures</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering youth in Townships through music production training, 
            mentorship from industry artists, and safe creative spaces.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Support Our Studios
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" className="w-full">
                Meet Our Creatives
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </div>
  );
}