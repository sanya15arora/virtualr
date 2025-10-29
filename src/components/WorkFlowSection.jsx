import React from 'react'
import {CheckCircle2} from 'lucide-react'
import codeImg from "../assets/code.jpg"
import {checklistItems} from '../constants'
import {motion} from "motion/react";

const WorkFlowSection = () => {
    return (
        <div className='mt-20 scroll-mt-20' id={'workflow'}>
            <h2 className='text-3x sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
                Accelerate your
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                    coding workFlow
                </span>
            </h2>
            <motion.div className="flex flex-wrap jusitify-center"
                        whileInView={{y: 0, opacity: 1}}
                        initial={{y: 100, opacity: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        viewport={{once: false, amount: 0.3}}>
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt='codeImage'/>
                </div>
                <div className="p-10 w-full lg:w-1/2">
                    {checklistItems.map((listItem, index) => (
                        <div key={index} className='flex mb-12'>
                            <div
                                className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2/>
                            </div>
                            <div>
                                <h5 className='mt-1 mb-2 text-xl'> {listItem.title}</h5>
                                <p className='text-md text-neutral-500'> {listItem.description}</p>
                            </div>
                        </div>))}
                </div>
            </motion.div>

        </div>
    )
}

export default WorkFlowSection