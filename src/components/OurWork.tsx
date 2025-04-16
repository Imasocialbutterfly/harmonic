import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Mic, Music } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaInstagram, FaSpotify, FaItunesNote } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  year: string;
  impact: string;
  icon: JSX.Element;
  galleryPath?: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  socials?: {
    instagram?: string;
    music?: string;
  };
}

export default function OurWork() {
  const projects: Project[] = [
    {
      title: "Mabopane Beats Studio Launch",
      description:
        "Established first free music production hub in Mabopane with DAWs, mixing boards, and mentorship",
      year: "2023",
      impact:
        "50 youth trained • 20 tracks on Spotify/Apple Music • 3 artists signed",
      icon: <Headphones className="h-5 w-5 text-purple-600" />,
    },
    {
      title: "Township Concert Series",
      description:
        "Quarterly community events featuring program participants and headline acts",
      year: "2024",
      impact:
        "900+ attendees • 35% crime reduction during events • R25k fundraiser",
      icon: <Mic className="h-5 w-5 text-purple-600" />,
      galleryPath: "/gallery",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Kopano Mere (KopanoTheFuture)",
      role: "Digital Content Creator",
      quote:
        "Harmonic transformed my approach to digital content creation. Their mentorship helped me develop a professional brand identity and significantly grow my audience engagement.",
      avatar: "/artists/kopano.jpg",
      socials: {
        instagram: "https://instagram.com/kopano.the.future",
      },
    },
    {
      name: "Happy Nkuna (Mochen)",
      role: "Recording Artist",
      quote:
        "Through Harmonic's concert series, I gained invaluable stage experience and industry connections that accelerated my professional development as a performing artist.",
      avatar: "/artists/mochen.jpg",
      socials: {
        instagram: "https://instagram.com/mochenrsa",
        music: "https://open.spotify.com/artist/7DkwT8IpIAjcquKnCwyFRg",
      },
    },
    {
      name: "Loatile Mangadi (Loatinover Pounds)",
      role: "Signed Artist",
      quote:
        "The studio facilities and industry mentorship at Harmonic provided the perfect launchpad for my music career.",
      avatar: "/artists/loatinoverpounds.jpg",
      socials: {
        instagram: "https://instagram.com/mochenrsa",
        music: "https://open.spotify.com/artist/5umZ6PgOsDmgJQFcYmAiNS",
      },
    },
    {
      name: "Khensani Baloyi (Protocol Kay)",
      role: "Emerging Artist",
      quote:
        "Even in my early stages with Harmonic, I'm impressed by their strategic approach to artist development and the tangible opportunities they provide.",
      avatar: "/artists/protocolkay.jpg",
      socials: {
        instagram: "https://instagram.com/protocol_kay012",
        music: "https://music.apple.com/gb/artist/protocol-kay/1613816367",
      },
    },
  ];

  return (
    <div id="our-work" className="bg-gradient-to-br from-purple-50 to-orange-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rhythms of Change
          </h2>
          <p className="text-lg text-gray-600">
            Amplifying potential through music in South African Townships
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white hover:shadow-lg transition-shadow ${
                project.galleryPath ? "cursor-pointer group" : ""
              }`}
            >
              {project.galleryPath ? (
                <Link
                  to={project.galleryPath}
                  className="block p-6 hover:bg-purple-50 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-purple-600">
                      {project.icon}
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-2">{project.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm font-semibold text-purple-600">
                      {project.impact}
                    </p>
                  </CardContent>
                </Link>
              ) : (
                <div className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {project.icon}
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-2">{project.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm font-semibold text-purple-600">
                      {project.impact}
                    </p>
                  </CardContent>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Music className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Voices from the Studio
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-start gap-4 mb-2">
                  <Avatar className="h-12 w-12 border-2 border-purple-100">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-purple-50">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-gray-600 italic mb-2">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {testimonial.socials && (
                  <div className="flex gap-3 ml-16">
                    {testimonial.socials.instagram && (
                      <a
                        href={testimonial.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 transition-colors"
                        aria-label={`${testimonial.name}'s Instagram`}
                      >
                        <FaInstagram className="h-5 w-5" />
                      </a>
                    )}
                    {testimonial.socials.music && (
                      <a
                        href={testimonial.socials.music}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 transition-colors"
                        aria-label={`${testimonial.name}'s Music`}
                      >
                        {testimonial.socials.music.includes("spotify") ? (
                          <FaSpotify className="h-5 w-5" />
                        ) : (
                          <FaItunesNote className="h-5 w-5" />
                        )}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}