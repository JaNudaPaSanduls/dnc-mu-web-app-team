import React from 'react';
import { apple, google, app_des } from '../assets';
import styles, { layout } from '../style';
import { motion } from "framer-motion";

const Apps = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
        <motion.div className={layout.sectionImgReverse}
        transition={{ delay: 0.15 }}
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 30 }}>
            <img src={app_des} alt="app_design" className="w-[100%] h-[100%] relative z=[5] cli-img" />
            <div className="absolute z-[3] -left-1/2 top-0 w[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[3] -left-1/2 bottom-0 w[50%] h-[50%] rounded-full white__gradient" />
        </motion.div>

        <motion.div className={layout.sectionInfo}
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 50 }}>
            <h2 className={styles.heading2}>Debarawewa College <br className="sm:block hidden"/> Mobile App</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Debarawewa National College’s mobile application has many features 
                like news, notifications, lms, image gallery, Blogs(Tutorials) and ect.
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img src={apple} alt="apple_app_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                <img src={google} alt="play_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
        </motion.div>
    </section>
  )
}

export default Apps