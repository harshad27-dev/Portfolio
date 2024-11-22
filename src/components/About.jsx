import about from "../assets/pro.jpg"
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{ opacity:1, y:0}}
      initial={{ opacity:0, y: -100}}
      transition={{ duration: 1}}
      className="my-20 text-center text-4xl">
        About me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1}}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-full" src={about} alt="About" />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1}}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">Hello, I'm Harshad shaik, and I'm from Visakhapatnam. I pursuing my B.Tech in Raghu engineering college branch is Computer Science Engineering with 72%. Through my studies, I've developed a strong foundation in programming and software development, with experience in various technologies and languages.
            I'm fresher and I don't have any work experience in any company My strength is that I can adapt quickly to any environment My short-term goal is to get place in any company.
            That's all about me
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About