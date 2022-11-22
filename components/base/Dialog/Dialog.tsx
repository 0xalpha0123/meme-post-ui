import React, { useEffect, ReactElement } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

interface dialogProps {
  isOpen: boolean;
  handleDismiss: Function;
  content?: ReactElement;
  footer?: ReactElement;
}

const Dialog = (
  props: dialogProps = { isOpen: false, handleDismiss: () => {} }
) => {
  const { isOpen, handleDismiss, content, footer } = props;
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start({
        display: "block",
        opacity: 1,
        zIndex: 99,
        transition: { duration: 0.2 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 0.2 },
      });
      controls.start({
        display: "none",
        transition: { delay: 0.2 },
      });
    }
  }, [isOpen]);

  return (
    <motion.div
      animate={controls}
      className="fixed inset-0 overflow-y-auto hidden"
    >
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => handleDismiss()}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-6 mx-auto rounded-lg shadow-lg border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
          {content && <div className="sm:flex">{content}</div>}
          {footer && (
            <div className="items-center gap-2 mt-3 sm:flex">{footer}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Dialog;
