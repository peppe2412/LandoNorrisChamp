import { motion } from "framer-motion";
import styles from "./css/style.module.css";
import About from "./about/About";
import Surname from "./about/surname/Surname";

export default function PilotDetails() {
  return (
    <>
      <div className={`${styles.pilot_details_grid}`}>
        <div className={`${styles.pilot_details_col}`}>
          <h2 className="color-maclaren pilot-details-title">
            Chi è Lando Norris?
          </h2>
          <div className="mt-2">
            <About></About>
          </div>
          <div className="mt-10">
            <h3 className="color-maclaren text-xl mb-2">"Last Lap Lando"</h3>
            <Surname></Surname>
          </div>
        </div>
        <div className={`${styles.pilot_details_img_col} flex items-center`}>
          <aside>
            <motion.img
              initial={{ opacity: 0, scale: 1, translateX: 100 }}
              whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              src="https://www.rainews.it/resizegd/768x-/dl/img/2025/12/07/1765108586275_rainewsdfbabefedafeecdb.jpg"
              alt="Lando Norris"
              className="image-details-pilot"
            />
          </aside>
        </div>
      </div>
    </>
  );
}
