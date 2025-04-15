import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import OurWork from "@/components/OurWork"


const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      <About />
      <OurWork />
    </div>
  )
}

export default Index