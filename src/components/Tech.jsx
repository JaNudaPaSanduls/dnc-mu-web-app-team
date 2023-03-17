import React from 'react';
import styles, { layout } from '../style';
import { github, tech_logo } from '../assets';
import { motion } from "framer-motion";


const Tech = () => {
  return (
    <section className={layout.section}>
        <motion.div className={`${layout.sectionInfo} z-[1]`}
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 30 }} >
            <h2 className={styles.heading2}>Our technologies</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                We use many technologies. React JS use to build frontend of web applications, 
                Node JS use to build backend like REST API, Android Studio use to build android apps, 
                .net(C#) use to build windows applications
                , python use to build windows applications and AI/ML models, ANN models and ect.</p>
                <button type="button" className={`mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium
        text-[18px] text-primary outline-none ${styles} rounded-[10px]`} onClick={() => window.location = 'https://www.github.com/janudapasanduls'}>
            <div className="flex">
                <img src={github} className="w-[30px] h-[30px] mr-[5px] mt-[-2px]" />Github
            </div>
            </button>
        </motion.div>

        <motion.div className={layout.sectionImg}
        transition={{ delay: 0.15 }}
        whileInView={{ opacity: 1, y: 0  }}
      initial={{ opacity: 0, y: 30 }} >
            <img src={tech_logo} alt="tech_logo" className="w-[100%] h-[100%]" />
        </motion.div>
        
    </section>
  )
}

export default Tech