import React from 'react';
import styles from '../style';
import { dnc_logo } from '../assets';
import { motion } from "framer-motion";

const Platform = () => {
  return (
    <motion.section
     className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient rounded-[20px]
    box-shadow`}>
        <motion.div 
        whileInView={{ opacity: 1, y: 0  }}
      initial={{ opacity: 0, y: 30 }} 
      className={`${styles.flexCenter} ml-[-35px] mt-5 mr-[-38px] z-[1]`}>
            <img src={dnc_logo} className="w-[270px] h-[270px] mb-10 mr-10 cli-img" />
        </motion.div>
        <motion.div 
        transition={{ delay: 0.10 }}
        whileInView={{ opacity: 1, y: 0  }}
      initial={{ opacity: 0, y: 30 }} 
      className="flex-1 flex flex-col z-[1]">
            <h2 className={`${styles.heading2}`}>Let’s try our platforms now!</h2>
            <p className={`${styles.paragraph} text-[15px] max-w-[470px] mt-5 `}>You can try out websites, apps and much more. 
                Don’t forget to give feedback about your experience<br />
                Email: debrawewamu@gmail.com</p>
        </motion.div>
        <motion.div
        transition={{ delay: 0.15 }}
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 30 }}  className={`sm:ml-10 ml-0 mt-10`}>
            <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
            text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
            onClick={() => window.location = 'https://www.debarawewacollege.lk'}>
                Get Started
            </button>
        </motion.div>
        <div className="absolute w-[60%] h-[60%] -left-[50%] z-[0] rounded-full blue__gradient"></div>
    </motion.section>
  )
}

export default Platform