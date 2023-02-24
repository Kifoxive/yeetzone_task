import React from "react";
import styles from "../styles";

import Button from "./Button";
import FooterForm from "./FooterForm";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#28d28c] to-[#138958]">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <section
          className={`${styles.container} flex-1 flex flex-col-reverse sm:flex-row justify-center sm:justify-between`}
        >
          <div>
            <h3 className={`${styles.heading3} mb-4`}>Dokumenty</h3>
            <ul className="text-center sm:text-start">
              <li className={`${styles.paragraph} mb-3 font-normal`}>
                Zpracování osobních údajů
              </li>
              <li className={`${styles.paragraph} mb-3 font-normal`}>
                Obchodní podmínky
              </li>
              <li className={`${styles.paragraph} mb-3 font-normal`}>
                Cookies
              </li>
            </ul>
            <p className={`${styles.paragraph} font-bold mt-[42px]`}>
              Copyright 2021 ©Vytvořil Yeetzone
            </p>
          </div>
          <div className="mb-10 sm:mb-0">
            <h3 className={`${styles.heading3} mb-4`}>Sociální sítě</h3>
            <div className="flex justify-between">
              <a
                href="https://www.facebook.com/yeetzone/"
                target="_blank"
                className={`${styles.paragraph} font-normal`}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/yeet.zone/"
                target="_blank"
                className={`${styles.paragraph} font-normal`}
              >
                Instagram
              </a>
            </div>
            <Button text="Přihlášení" />
          </div>
        </section>
        <section
          className={`${styles.container} flex-1 flex flex-col items-center justify-center w-full`}
        >
          <FooterForm />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
