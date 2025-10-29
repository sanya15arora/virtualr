import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import {motion} from "motion/react"


const HeroSection = () => {
    return (
        <motion.div className="flex flex-col items-center mt-6 scroll-mt-20 lg:mt-6"
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                    viewport={{once: false, amount: 0.3}}
        >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center ">
                VirtualR build tools
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                    {" "} for developers
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Empower your creativity and bring your VR apps idea to life with our intuitive developments tools.
                Get started today and turn your imagination into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-3 px-4 mx-3'>
                    Start for free
                </a>
                <a href="#" className='rounded-md border py-3 px-4 mx-3'>
                    Documentation
                </a>
            </div>
            <motion.div className='flex mt-10 justify-center'
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.2}}>
                <video autoPlay muted loop
                       className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video1} type="video/mp4"/>
                    Your browser doesn&#39;t support video tag
                </video>
                <video autoPlay muted loop
                       className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video2} type="video/mp4"/>
                    Your browser doesn&#39;t support video tag
                </video>

            </motion.div>
        </motion.div>
    )
}

export default HeroSection