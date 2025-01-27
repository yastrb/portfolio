import { AuroraBackground } from "./ui/aurora-background"
import { Boxes } from "./ui/Background-boxes"
import { motion } from 'framer-motion'
import { cn } from "../lib/utils";


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div className="hero relative ">
        {/* <div className="window w-[300px] h-[300px] bg-slate-50">
        <AuroraBackground className="">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Background lights are cool you know.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              And this, is chemical burn.
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Debug now
            </button>
          </motion.div>
        </AuroraBackground>
        </div> */}

<div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className="font-grechen text-4xl">Це шрифт Grechen Fuemen</h1>
      <p className="font-montserrat text-lg text-[#FAFAFA]">
        А це Montserrat Alternates. Гарно, правда?
      </p>
    </div>
      </div>
    </div>
  )
}

export default Hero