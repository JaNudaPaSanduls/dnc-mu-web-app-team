import React from "react";
import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Status = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:md-20 mb-6`}
    >
      {stats.map((stats) => (
        <motion.div
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0.5, y: 50 }} 
          key={stats.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stats.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[30px] xs:leading-[26px] leading-[43px] text-white text-gradient uppercase ml-3">
            {stats.title}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default Status;
