import React, { useEffect, ReactElement } from "react";
import cx from "clsx";
import { motion, useAnimation } from "framer-motion";

interface dialogProps {
  isOpen: boolean;
  handleDismiss: Function;
  content?: ReactElement;
  footer?: ReactElement;
  width?: string;
}

const Dialog = (props: dialogProps) => {
  const { isOpen, handleDismiss, content, footer } = props;
  const controls = useAnimation();

  const width = props.width || "max-w-lg";

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
        <div
          className={cx(
            "relative w-full p-6 mx-auto rounded shadow-lg border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark",
            width
          )}
        >
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
