import React from "react";
import { robot, arrowUp } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0.5, y: 100 }} 
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0
        sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-min-logo-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph}`}>
            <span className="text-[#14ff91]">Media Unit of</span> Debarawewa College
          </p>
        </div>

        <motion.div
          transition={{ delay: 0.15 }}
          whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 200 }} 
          className="flex flex-row justify-between items-center
        w-full"
        >
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[72px]
            text-[52px] text-white ss:leading-[100px] leading-[75px]"
          >
            The Next<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <div className="ss:flex  md:mr-4 mr-0">
            <div
                className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
                bg-blue-gradient p-[2px] cursor-pointer btn`}
            >
                <div
                    className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]
                    rounded-full`}
                >
                    <a href="https://www.debarawewacollege.lk">
                        <div className={`${styles.flexStart} flex-row`}>
                            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                                <span className="text-gradient">Get</span>
                            </p>
                            <img
                                src={arrowUp}
                                className="w-[23px] h-[23px] object-contain"
                                alt="arrow-up"
                            />
                        </div>
                        <p className="font-poppins font-medium text-[18px] leading-[23px]">
                            <span className="text-gradient">Started</span>
                        </p>
                    </a>
                </div>
            </div>
        </div>
          </div>
        </motion.div>
        <h1
          className="flex-1 font-poppins font-semibold ss:text-[68px]
            text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
        >
          School Platform
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Debarawewa national college web/app team use’s most popular and
          advanced technologies to develop advanced full stack web applications,
          android apps, windows applications.
        </p>
      </motion.div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <motion.img 
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0.5, y: 100 }} 
        transition={{ delay: 0.1 }}
        src={robot} alt="intro-logo" className="w-[100%] h-[100%] relative z-[5]" />
        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <a href="https://www.debarawewacollege.lk">
      <div className={`ss:hidden ${styles.flexCenter}`}>
      <div className="ss:flex  md:mr-4 mr-0">
            <div
                className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
                bg-blue-gradient p-[2px] cursor-pointer`}
            >
                <div
                    className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]
                    rounded-full`}
                >
                        <div className={`${styles.flexStart} flex-row`}>
                            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                                <span className="text-gradient">Get</span>
                            </p>
                            <img
                                src={arrowUp}
                                className="w-[23px] h-[23px] object-contain"
                                alt="arrow-up"
                            />
                        </div>
                        <p className="font-poppins font-medium text-[18px] leading-[23px]">
                            <span className="text-gradient">Started</span>
                        </p>
                </div>
            </div>
        </div>
      </div>
      </a>
    </section>
  );
};

export default Home;
