import React from 'react'
import styles from '../style'
import { clients } from '../constants'
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
        <motion.div
        whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 30 }} 
       className={`${styles.flexCenter}`}>
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter}
                sm:min-w-[300px] min-w-[120px]`}>
                    <img src={client.logo} alt="client-logo"
                    className="sm:w-[210px] w-[100px] object-contain cli-img" />
                </div>
            ))}
        </motion.div>
    </section>
  )
}

export default Clients