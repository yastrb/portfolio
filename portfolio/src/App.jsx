import Hero from "./components/Hero"
import FloatingNav from "./components/ui/FloatingNav"
function App() {

  return (
    <main className=" relative h-[500px] flex flex-col items-center justify-center overflow-hidden mx-auto px-5 sm:px-10 bg-black">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: "🏠" },
        ]}/>
        <Hero />
      </div> 
    </main>
  )
}

export default App
