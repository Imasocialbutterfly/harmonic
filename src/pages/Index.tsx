import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"


const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default Index