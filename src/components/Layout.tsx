import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Props {
  children?: React.ReactNode;
  btn: "plus" | "back";
}

export const Layout: React.FC<Props> = ({ children, btn }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="
            flex flex-col items-start w-full pt-10
            px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
            pt-24 h-full
        "
    >
      <div className="card-flex">
        <div className="header">
          <p>SmartSprout</p>
          {btn === "plus" ? (
            <Link passHref href={"/add"} className="plus">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="plus-icon"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </i>
            </Link>
          ) : null}
          {btn === "back" ? (
            <Link passHref href={"/"} className="plus">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="plus-icon"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </i>
            </Link>
          ) : null}
        </div>
        <div className="content">{children}</div>
      </div>
    </motion.main>
  );
};
