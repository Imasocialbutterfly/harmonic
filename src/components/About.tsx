import { Music, Mic, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Amplifying Futures Through Music
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empowering youth in South African townships with creative mentorship, industry access, and safe spaces since 2024
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Music className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Music as a Catalyst</h3>
              <p className="mt-2 text-gray-500">
                Tackling youth unemployment and crime by providing studios, training, and performance opportunities in 
                <span className="font-semibold"> Mabopane, Soshanguve, Ga-Rankuwa, Atteridgeville and Mamelodi</span>.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Mic className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Tangible Results</h3>
              <p className="mt-2 text-gray-500">
                <span className="font-semibold">85% of participants</span> report reduced risky behavior. 
                <span className="block mt-2">10 artists signed and co-signed to record labels and publishing groups</span>
                <span className="block">300+ attendees at community concerts</span>
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Expert Leadership</h3>
              <p className="mt-2 text-gray-500">
                Led by industry professionals like 
                <span className="font-semibold"> Tshepo Baloyi</span> (music producer) and supported by partnerships with 
                <span className="font-semibold"> Sweet SmokeZA</span> and local businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-purple-50 rounded-lg p-8">
            <p className="text-sm font-semibold text-purple-600">
              Committed to Transparency
            </p>
            <p className="mt-2 text-gray-600">Registered NPO: 299-916</p>
            <p className="text-gray-600">Tax Compliant: 9959488181</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}