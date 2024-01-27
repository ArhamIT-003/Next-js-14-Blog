import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contact from "../../../public/contact.png";
import { MotionBtn, MotionForm } from "@/components/MotionDiv/MotionDiv";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.imgContainer}>
        <Image src={contact} alt="contact-img" fill className={styles.img} />
      </div>
      <MotionForm
        initial={{ opacity: 0, y: 500 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        }}
        action=""
        transition={{ duration: 0.75, ease: "backOut" }}
        className={styles.formContainer}
      >
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Phone Number (Optional)"
          required
          className={styles.input}
        />
        <textarea
          type="text"
          placeholder="Message"
          required
          rows={8}
          className={styles.input}
        />
        <MotionBtn
          initial={{ opacity: 1 }}
          whileTap={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "circIn" },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "circIn" },
          }}
          type="submit"
        >
          Submit
        </MotionBtn>
      </MotionForm>
    </div>
  );
};

export default Contact;
