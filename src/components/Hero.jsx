import profilePic from "../assets/profile2.jpg";
import resume from "../assets/harshad_resume.pdf"
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col iteam-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                    >
                        <span>
                            <Typewriter
                                words={['Harshad Shaik']}
                                loop={1}
                                typeSpeed={150}
                                deleteSpeed={50}
                                cursorStyle="|"
                            />
                        </span>
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg- bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                    >

                        <span>
                            <Typewriter
                                words={['MERN Stack Developer', 'Frontend Engineer', 'Backend Developer', 'Full Stack Developer']}
                                loop={0}
                                typeSpeed={70} 
                                deleteSpeed={70}
                                cursor
                                cursorStyle="|"
                            />
                        </span>
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter flex justify-center">As a motivated and detail-oriented fresher with hands-on experience in the MERN stack, I am eager to contribute my skills in developing responsive and scalable web applications. My passion for building user-friendly interfaces and robust backends drives me to leverage technologies like MongoDB, Express.js, React.js, and Node.js to create impactful solutions. I am keen to collaborate with dynamic teams, contribute to meaningful projects, and continuously enhance my technical expertise by staying updated with the latest trends in modern web development. With a strong foundation in full-stack development and a commitment to delivering high-quality work, I aim to grow professionally while adding value to the organization.
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{ x: 1, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="rounded-full" src={profilePic} alt="harshad shaik"
                    />
                </div>
                <div className="flex justify-center">
                    <motion.a
                        initial={{ x: 1, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        href={resume}
                        download="Harshad_Resume.pdf"
                        className="bg-blue-500 text-white mt-6 px-10 py-2 rounded-full hover:bg-blue-600"
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>
        </div>
    </div>
}

export default Hero