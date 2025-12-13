import { motion } from "framer-motion";
import Descriptions from "./descriptions/Descriptions";
import styles from "./css/style.module.css";

export default function DescriptionChamp() {
  return (
    <>
      <div className={`${styles.champ_desc_grid}`}>
        <div className={`${styles.champ_desc_col_img}`}>
          <div className={`${styles.champ_desc_img}`}>
            <motion.div
              initial={{ opacity: 0, scale: 1, translateZ: 200 }}
              whileInView={{ opacity: 1, scale: 1, translateZ: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`${styles.background_img_champ_desc}`}
            >
              <div className="flex justify-center">
                <motion.img
                  initial={{ opacity: 0, scale: 1, translateX: -200 }}
                  whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  src="/lando-norris-happy.png"
                  alt="Lando Norris"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className={`${styles.desc_champ_col}`}>
          <div className={styles.desc_champ}>
            <h2 className={`title-champ-desc ${styles.champ_desc_title}`}>
              Da giovane talento britannico a leggenda della F1
            </h2>
            <div className="desc-box">
              <Descriptions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
