import Hero from "./components/Hero"
import { FloatingNav } from "./components/ui/FloatingNav"
import { FaHome } from "react-icons/fa"
function App() {

  return (
    <main className=" relative h-full flex flex-col items-center justify-center overflow-hidden mx-auto px-5 sm:px-10 bg-black">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
        ]}/>
        <Hero />

      </div> 
    </main>
  )
}

export default App
