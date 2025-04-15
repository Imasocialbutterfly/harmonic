import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Headphones, Mic, Users } from "lucide-react";

export default function Programs() {
  return (
    <div id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empowering youth through music and creative opportunities in
            Pretoria’s townships
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Headphones className="h-8 w-8 text-purple-600" />
                <CardTitle className="mt-4">
                  Music Production Training
                </CardTitle>
                <CardDescription>
                  Studio access & skill-building
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Free access to professional studios, hands-on training in
                  mixing, beat-making, and equipment use. Collaborate with peers
                  and mentors to create tracks for platforms like Spotify.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mic className="h-8 w-8 text-purple-600" />
                <CardTitle className="mt-4">Industry Workshops</CardTitle>
                <CardDescription>
                  Networking & career development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Monthly workshops on digital marketing, financial literacy,
                  and artist branding. Join community events like concerts,
                  networking breakfasts, and car wash fundraisers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600" />
                <CardTitle className="mt-4">Artist Mentorship</CardTitle>
                <CardDescription>
                  Guidance from established musicians
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Partner with South African artists and producers for 1:1
                  coaching. Get support to register as professionals and launch
                  your music career.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
