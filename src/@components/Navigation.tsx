import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { close, logo, menu } from "../assets";
import styles from "../styles";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 right-0 flex justify-between items-center bg-gradient-to-r from-[#28d28c] to-[#138958]">
      <div className="px-4">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[100px]" />
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex px-4">
          <li
            className={`${styles.paragraph} ${
              pathname === "/" && "bg-green-400 text-[#138958]"
            } ml-2 px-6 py-5 uppercase`}
          >
            <Link className="hover:underline" to="/">
              home
            </Link>
          </li>
          <li
            className={`${styles.paragraph} ${
              pathname === "/about" && "bg-green-400 text-[#138958]"
            } ml-2 px-6 py-5 uppercase`}
          >
            <Link className="hover:underline" to="/about">
              about
            </Link>
          </li>
          <li
            className={`${styles.paragraph}  ${
              pathname === "/career" && "bg-green-400 text-[#138958]"
            } ml-2 px-6 py-5 uppercase`}
          >
            <Link className="hover:underline" to="/career">
              career
            </Link>
          </li>
          <li
            className={`${styles.paragraph}  ${
              pathname === "/contact" && "bg-green-400 text-[#138958]"
            } ml-2 px-6 py-5 uppercase`}
          >
            <Link className="hover:underline" to="/contact">
              contact
            </Link>
          </li>
        </ul>
        <div className="block relative md:hidden p-4">
          <button
            onClick={() => setShowMenu(true)}
            style={{
              background: `url(${menu}) center 100% / contain no-repeat`,
            }}
            className="h-[30px] w-[30px]"
          />
          <div
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute flex-col items-end top-0 right-0 bg-[#28d28c] shadow-lg`}
          >
            <div className="p-4">
              <button
                onClick={() => setShowMenu(false)}
                style={{
                  background: `url(${close}) center 100% / contain no-repeat`,
                }}
                className="h-[30px] w-[30px]"
              />
            </div>
            <ul className="flex flex-col">
              <li className="mt-2">
                <Link
                  onClick={() => setShowMenu(false)}
                  className={`text-white text-[1.6rem] ${
                    pathname === "/" && "bg-green-400 "
                  } px-16 py-4 block uppercase`}
                  to="/"
                >
                  home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  onClick={() => setShowMenu(false)}
                  className={`text-white text-[1.6rem] ${
                    pathname === "/about" && "bg-green-400 "
                  } px-16 py-4 block uppercase`}
                  to="/about"
                >
                  about
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  onClick={() => setShowMenu(false)}
                  className={`text-white text-[1.6rem] ${
                    pathname === "/career" && "bg-green-400 "
                  } px-16 py-4 block uppercase`}
                  to="/career"
                >
                  career
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  onClick={() => setShowMenu(false)}
                  className={`text-white text-[1.6rem] ${
                    pathname === "/contact" && "bg-green-400 "
                  } px-16 py-4 block uppercase`}
                  to="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
