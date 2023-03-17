import React from 'react';
import styles from '../style';
import { team } from '../constants';
import { quotes } from '../assets';
import { motion } from "framer-motion";

const Team = () => {
    const TeamCard = ({ content, name, title, img }) => (
        <motion.div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[367px] md:mr-10 md:mr-5 mr-0 my-5 team-card"
        transition={{ delay: 0.15 }}
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 30 }} >
            <img src={quotes} alt="quote" className="w-[42px] h-[27px] object-contain" />
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                {content}
            </p>
            <div className="flex flex-row">
                <img src={img} alt="team member image" className="w-[48px] h-[48px] rounded-full" />

                <div className="flex flex-col ml-4">
                    <h4 className="font-poppins text-[20px] leading-[32px] text-white">{name}</h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
                </div>
            </div>
        </motion.div>
    )

  return (
    <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>

        <motion.div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 30 }} >
            <h1 className={styles.heading2}>Our developers
                <br className="sm:block hidden" />team Members</h1>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Everything design and developed by ourself.
                    We develop web applications, web pages,
                    android apps, x64/ARM based computer applications</p>
            </div>
        </motion.div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full team-container relative z-[1]">
            {team.map((card) => (
                <TeamCard key={card.id} {...card} />
            ))}
        </div>
    </section>
  )
}

export default Team