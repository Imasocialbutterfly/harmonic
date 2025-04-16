import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";


function Contact() {
    return (
        <div id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Get in touch to learn more about our programs
              </p>
            </div>
    
            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="h-32" />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                  </Button>
                </form>
              </div>
    
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1 text-gray-500">info@harmonic.org.za</p>
                  </div>
                </div>
    
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="mt-1 text-gray-500">+27 12 345 6789</p>
                  </div>
                </div>
    
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="mt-1 text-gray-500">
                      24 Peter Magano Rd<br />
                      Mabopane, Pretoria<br />
                      0190
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Contact;
