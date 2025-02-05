import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='blue'/>
        <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill='yellow'/>
        <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill='yellow'/>
      </div>
    </div>
  )
}

export default Hero