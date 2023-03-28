import React from 'react';
import styles from '../style';
import { web_logo } from '../assets';
import { motion } from "framer-motion";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} mb-[20px] pb-[20px] pt-[30px] flex-col z-[5] bg-[#0B0A0C]  w-full rounded-[10px]`}>
      <div className={`${styles.flexStart} md:flex-row flex-col md-8 w-full z-[5] pr-[20px] pl-[20px]`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <motion.img 
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          src={web_logo} alt="web_logo"
          title="Media Unit web/app team of debarawewa college"
          className="w-[435px] h-[90px] object-contain " />
          <motion.p
          whileInView={{ opacity: 1, y: 0  }}
          initial={{ opacity: 0.5, y: 30 }} 
          className={`${styles.paragraph} mt-4 ml-2 max-w-[310px]`}>
          A new inspiration of debarawewa national college and media unit.
          </motion.p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0" >
        {footerLinks.map((footerlink) => (
          <motion.div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          whileInView={{ opacity: 1, y: 0  }}
          initial={{ opacity: 0, y: 100 }} >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite menu-item cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                  onClick={() => window.open(link.link)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="pr-[20px] pl-[20px] w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] mt-[20px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright ©️ 2023 Web/App Team of Media Unit. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            title={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Footer