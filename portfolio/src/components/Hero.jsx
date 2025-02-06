import Grid from "./Grid";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="spotlight-container">
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='blue' />
          <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill='yellow' />
          <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill='yellow' />
        </div>
        <Grid />
      </div>

    </section>
  )
}

export default Hero