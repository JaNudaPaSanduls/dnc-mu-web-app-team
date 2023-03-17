import React from 'react'
import { features } from '../constants';
import styles, { layout } from '../style';
import { motion } from "framer-motion";

const Card = ({ icon, title, content, index }) => (
    <motion.div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" : "mb-0"}
    feature-card adv`}
    transition={{ delay: 0.15 }}
    whileInView={{ opacity: 1, y: 0  }}
    initial={{ opacity: 0, y: 30 }} >
        <div className={`${styles.flexCenter} w-[64px] h-[64px]
        rounded-full bg-dimBlue`}>
            <img src={icon} alt="feature-icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h1 className="font-poppins font-semibold text-white text=[18px] leading-[23px] mb-1">{title}</h1>
            <p className="font-poppins font-normal text-dimWhite text=[16px] leading-[24px] mb-1">{content}</p>
        </div>
    </motion.div>
);

const Advantages = () => {
  return (
    <section id="advantages" className={`${layout.section}`}>
        <motion.div className={layout.sectionInfo}
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 30 }} >
            <h2 className={styles.heading2}>Advantages of our 
            <br className="sm:block hidden"></br> applications</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>On our platform apps uses most advanced security systems,
                low latency, reliable and user friendly ui/ux.</p>
                <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
        text-[18px] text-primary-outline-none rounded-[10px] ${styles} mt-10`} onClick={() => window.open('mailto:debarawewacollege@gmail.com')}>
            Contact Us
        </button>
        </motion.div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <Card key={feature.id} {...feature} />
            ))}
        </div>
    </section>
  )
}

export default Advantages