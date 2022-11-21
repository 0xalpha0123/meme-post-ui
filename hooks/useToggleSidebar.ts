import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../store";
import { toggleSlider } from "../store/slices/appSlice";
import { useAnimation, useUnmountEffect } from "framer-motion";

const useToggleSidebar = () => {
  const dispatch = useDispatch();
  const controls = useAnimation();
  const controlLogo = useAnimation();
  const controlDivider = useAnimation();
  const controlTitleText = useAnimation();
  const sliderOpen = useSelector((state: RootState) => state.app.sliderOpen);

  useUnmountEffect(() => {
    if (!sliderOpen) {
      controls.start({
        minWidth: "60px",
        transition: { duration: 0 },
      });
      controlLogo.start({
        width: "40px",
        transition: { duration: 0 },
      });
      controlDivider.start({
        display: "block",
        transition: { duration: 0 },
      });
      controlTitleText.start({
        opacity: 0,
        display: "none",
      });
    } else {
      controls.start({
        minWidth: "275px",
        transition: { duration: 0 },
      });
      controlLogo.start({
        width: "250px",
        transition: { duration: 0 },
      });
      controlDivider.start({
        display: "none",
        transition: { duration: 0 },
      });
      controlTitleText.start({
        opacity: 1,
        display: "block",
        transition: { delay: 0 },
      });
    }
  });

  const handleTogglebar = () => {
    if (sliderOpen) {
      controls.start({
        minWidth: "60px",
        transition: { duration: 0.3 },
      });
      controlLogo.start({
        width: "40px",
        transition: { duration: 0.3 },
      });
      controlDivider.start({
        display: "block",
        transition: { duration: 0.3 },
      });
      controlTitleText.start({
        opacity: 0,
        display: "none",
      });
    } else {
      controls.start({
        minWidth: "275px",
        transition: { duration: 0.3 },
      });
      controlLogo.start({
        width: "250px",
        transition: { duration: 0.3 },
      });
      controlDivider.start({
        display: "none",
        transition: { duration: 0.3 },
      });
      controlTitleText.start({
        opacity: 1,
        display: "block",
        transition: { delay: 0.3 },
      });
    }
    dispatch(toggleSlider());
  };

  return useMemo(() => {
    return {
      controls,
      controlLogo,
      controlDivider,
      controlTitleText,
      active: sliderOpen,
      handleTogglebar,
    };
  }, [sliderOpen]);
};

export default useToggleSidebar;
