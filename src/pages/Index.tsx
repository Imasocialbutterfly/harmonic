import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import OurWork from "@/components/OurWork"
import Programs from "@/components/Programs"


const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      <About />
      <OurWork />
      <Programs />
    </div>
  )
}

export default Index