import Image from "next/image";
import styles from "./page.module.css"; // importing the styles module
import { MotionBtn, MotionDiv } from "@/components/MotionDiv/MotionDiv";

export default function Home() {
  return (
    <main className={styles.main}>
      <MotionDiv
        initial={{ opacity: 0, x: -500 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, staggerChildren: 0.1 },
        }}
        transition={{ ease: "easeInOut" }}
        className={styles.textContainer}
      >
        <h1>Creative thoughts agency</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corrupti iste excepturi vitae fugit quae, corporis quam vero atque
          reiciendis!
        </p>
        <div className={styles.btnContainer}>
          <MotionBtn
            initial={{ opacity: 1 }}
            whileTap={{
              scale: 1.25,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.2, ease: "circInOut" },
            }}
          >
            Learn more
          </MotionBtn>
          <MotionBtn
            initial={{ opacity: 1 }}
            whileTap={{
              scale: 1.25,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.2, ease: "circInOut" },
            }}
          >
            Contact
          </MotionBtn>
          {/* a button for contacting the agency */}
        </div>
      </MotionDiv>
      <MotionDiv
        className={styles.imgContainer}
        initial={{ opacity: 0, x: 500 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, staggerChildren: 0.1 },
        }}
        transition={{ ease: "easeInOut" }}
      >
        <Image src={"/hero.gif"} alt="hero.gif" fill className={styles.img} />
      </MotionDiv>
    </main>
  );
}
