import Hero from "./components/Hero"

function App() {

  return (
    <main className=" relative flex flex-col items-center justify-center overflow-hidden mx-auto px-5 sm:px-10 bg-black">
      <div className=" pt-6 pb-4 flex justify-end">
        <button className=" bg-slate-800 pt-3 pb-4 px-4 rounded-xl">theme</button>
      </div>
      <div className="w-full max-w-7xl">
        <Hero />
      </div>

    </main>
  )
}

export default App
