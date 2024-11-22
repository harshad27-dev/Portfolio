import { RiReactjsLine } from "react-icons/ri"
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

const Technologies = () => {
    return (
        <div
            className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{ opacity:1, y:0}}
            initial={{ opacity:0, y: -100}}
            transition={{ duration: 1}}
            className="my-20 text-center text-4xl">Technologies
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <DiNodejs className="text-7xl text-green-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <SiExpress className="text-7xl text-black-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <SiMongodb className="text-7xl text-green-700" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <FaPython className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" >
                    <SiMysql className="text-7xl text-red-400" />
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies