import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(true);
  };
  const closeNav = () => {
    setOpen(false);
  };
  return (
    <div className="absolute top-0 overflow-hidden w-full">
      <div className="">
        <AnimatePresence>
          {open ? (
            <div className="z-50 min-h-screen min-w-full overflow-hidden">
              <motion.div
                layoutId="bgss"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="bg-green-200 min-w-full min-h-screen flex flex-col items-center justify-center"
              >
                <div className="">
                  <div className="flex flex-col items-center justify-center">
                    <h1 onClick={closeNav} className="cursor-pointer">
                      close
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              layoutId="bgss"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="flex flex-row items-center justify-between px-4 py-2 bg-red-200"
            >
              <div>any thing nav</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={openNav}
                className="cursor-pointer"
              >
                open
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
