import { Award, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Harmonic
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Transforming lives through youth development since 2024
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Community Focus</h3>
              <p className="mt-2 text-gray-500">
                Working directly within Pretoria townships to create lasting
                change
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Proven Impact</h3>
              <p className="mt-2 text-gray-500">
                Empowering township youth to thrive by harnessing the power of
                the entertainment industry through creative mentorship, skills
                training, and performance opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Dedicated Team</h3>
              <p className="mt-2 text-gray-500">
                Passionate professionals committed to youth development
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-purple-50 rounded-lg p-8">
            <p className="text-sm font-semibold text-purple-600">
              Registration Details
            </p>
            <p className="mt-2 text-gray-600">NPO Number: 299-916</p>
            <p className="text-gray-600">Tax Number: 9959488181</p>
          </div>
        </div>
      </div>
    </div>
  );
}
