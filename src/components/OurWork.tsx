import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Award, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function OurWork() {
  const projects = [
    {
      title: "Sunset Escape",
      description:
        "Community engagement by hosting events highlighting the developing talent",
      year: "2023",
      impact: "15 artist performances, gained experience and networking",
    },
  ];

  const testimonials = [
    {
      name: "Kopano",
      role: "Mentee turned Mentor",
      quote:
        "Harmonic connected with certain i didnt even think i would be in the same studio. With that alone it gave oppotunity to work more experienced individuals in the industry thus my success",
      avatar: "/placeholder.svg",
    },
  ];
  return (
    <div
      id="our-work"
      className="bg-gradient-to-br from-purple-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">
            Transforming lives and building stronger communities through youth
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  {project.title}
                </CardTitle>
                <CardDescription>{project.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm font-semibold text-purple-600">
                  {project.impact}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
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
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
